import React from 'react';
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeartIcon as HeartSolid } from 'react-native-heroicons/solid';

import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { toggleFavourites } from '../../redux/slices/favouriteSlice';
import getStyles from './styles';
import { useTheme } from '../../theme/useTheme';
import ItemFavourites from './ItemFavourites';

const Favourites = () => {
  const dispatch = useAppDispatch();
  const { favourites } = useAppSelector(state => state.favourite);
  const { theme } = useTheme();
  const styles = getStyles(theme);
  const renderItem = ({ item }: any) => (
    <Pressable style={styles.card}>
      <Image
        source={{
          uri: item.urlToImage || 'https://via.placeholder.com/600x300',
        }}
        style={styles.image}
      />

      <View style={styles.content}>
        <View style={styles.headerRow}>
          <Text style={styles.source}>{item.source?.name}</Text>

          <Pressable onPress={() => dispatch(toggleFavourites(item))}>
            <HeartSolid size={24} color={theme.primary} />
          </Pressable>
        </View>

        <Text numberOfLines={2} style={styles.title}>
          {item.title}
        </Text>

        <Text numberOfLines={3} style={styles.description}>
          {item.description}
        </Text>

        <View style={styles.footer}>
          <Text style={styles.date}>{item.publishedAt?.split('T')[0]}</Text>
        </View>
      </View>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Favourite News</Text>

      <FlatList
        data={favourites}
        keyExtractor={item => item.url}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.list,
          favourites.length === 0 && styles.emptyList,
        ]}
        renderItem={({ item }) => (
          <ItemFavourites
            item={item}
            styles={styles}
            onRemove={() => dispatch(toggleFavourites(item))}
          />
        )}
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
