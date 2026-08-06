import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { getNewsThunk } from '../../redux/thunk/getNewsThunk';
import { toggleFavourites } from '../../redux/slices/favouriteSlice';

import { MainStackParamList } from '../../navigation/types';
import Routes from '../../constants/Routes';

import { useTheme } from '../../theme/useTheme';
import getStyles from './styles';

import HomeHeader from './HomeHeader';
import ItemNews from './ItemNews';
import { breadkingNewsThunk } from '../../redux/thunk/breakingNewsThunk';
import { setFilters } from '../../redux/slices/filterSlice';

type NavigationProp = NativeStackNavigationProp<MainStackParamList>;

const PAGE_SIZE = 10;

const Home = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp>();

  const { theme } = useTheme();
  const styles = getStyles(theme);

  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const { news, loading, error, totalResults } = useAppSelector(
    state => state.getNews,
  );
  const { search, category, country } = useAppSelector(state => state.filter);
  const { favourites } = useAppSelector(state => state.favourite);
  const { breakingNews } = useAppSelector(state => state.breakingNews);
  const [localSearch, setLocalSearch] = useState(search);
  const fetchNews = useCallback(
    (query: string, pageNumber: number) => {
      dispatch(
        getNewsThunk({
          q: query,
          page: pageNumber,
          pageSize: PAGE_SIZE,
        }),
      );
    },
    [dispatch],
  );

  useEffect(() => {
    const query =
      search.trim() || (category !== 'All' ? category.toLowerCase() : 'india');

    dispatch(
      getNewsThunk({
        q: query,
        page: 1,
        pageSize: PAGE_SIZE,
      }),
    );

    dispatch(
      breadkingNewsThunk({
        country: country === 'India' ? 'in' : 'us',
        page: 1,
        pageSize: 5,
      }),
    );

    setPage(1);
  }, [search, category, country]);

  const handleSearch = () => {
    const query = localSearch.trim();

    if (!query) return;

    dispatch(
      setFilters({
        search: query,
        category,
        country,
      }),
    );
  };
  const handleCategoryPress = (category: string) => {
    setSelectedCategory(category);
    setPage(1);

    fetchNews(category.toLowerCase(), 1);
  };
  const loadMore = () => {
    if (loading || news.length >= totalResults) return;

    const nextPage = page + 1;
    setPage(nextPage);

    dispatch(
      getNewsThunk({
        q: search.trim() || (category !== 'All' ? category : 'india'),
        page: nextPage,
        pageSize: PAGE_SIZE,
      }),
    );
  };
  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.error}>
          {typeof error === 'string'
            ? error
            : error?.message || 'Something went wrong'}
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={news}
        keyExtractor={(item, index) => item.url + index}
        renderItem={({ item }) => (
          <ItemNews
            item={item}
            styles={styles}
            isFavourite={favourites.some(fav => fav.url === item.url)}
            onFavourite={() => dispatch(toggleFavourites(item))}
            onPress={() =>
              navigation.navigate(Routes.NEWS_DETAILS, {
                url: item.url,
              })
            }
          />
        )}
        contentContainerStyle={styles.cardContainer}
        showsVerticalScrollIndicator={false}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListHeaderComponent={
          <HomeHeader
            search={localSearch}
            setSearch={setLocalSearch}
            handleSearch={handleSearch}
            navigation={navigation}
            breakingNews={breakingNews}
            selectedCategory={selectedCategory}
            onCategoryPress={handleCategoryPress}
            styles={styles}
          />
        }
        ListFooterComponent={
          loading ? (
            <ActivityIndicator
              size="small"
              style={styles.loader}
              color={theme.primary}
            />
          ) : null
        }
      />
    </SafeAreaView>
  );
};

export default Home;
