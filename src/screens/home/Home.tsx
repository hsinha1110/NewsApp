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

type NavigationProp = NativeStackNavigationProp<MainStackParamList>;

const PAGE_SIZE = 10;

const Home = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp>();

  const { theme } = useTheme();
  const styles = getStyles(theme);

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const { news, loading, error, totalResults } = useAppSelector(
    state => state.getNews,
  );

  const { favourites } = useAppSelector(state => state.favourite);
  const { breakingNews } = useAppSelector(state => state.breakingNews);

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
    fetchNews('india', 1);

    dispatch(
      breadkingNewsThunk({
        country: 'us',
        page: 1,
        pageSize: 5,
      }),
    );
  }, []);
  const handleSearch = () => {
    const query = search.trim();

    if (!query) return;

    setSelectedCategory(query);
    setPage(1);

    fetchNews(query, 1);
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

    fetchNews(selectedCategory.toLowerCase(), nextPage);
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
            search={search}
            setSearch={setSearch}
            handleSearch={handleSearch}
            breakingNews={breakingNews}
            navigation={navigation}
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
