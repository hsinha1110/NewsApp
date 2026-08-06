import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { toggleFavourites } from '../../redux/slices/favouriteSlice';
import { useTheme } from '../../theme/useTheme';

import getStyles from './styles';
import ItemFavourites from './ItemFavourites';

const Favourites = () => {
  const dispatch = useAppDispatch();

  const { favourites } = useAppSelector(state => state.favourite);

  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Favourite News</Text>

      <FlatList
        data={favourites}
        keyExtractor={item => item.url}
        renderItem={({ item }) => (
          <ItemFavourites
            item={item}
            styles={styles}
            onRemove={() => dispatch(toggleFavourites(item))}
          />
        )}
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={false}
        contentContainerStyle={[
          styles.list,
          favourites.length === 0 && styles.emptyList,
        ]}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No favourite news found</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default Favourites;
