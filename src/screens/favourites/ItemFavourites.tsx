import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { HeartIcon as HeartSolid } from 'react-native-heroicons/solid';
import { ItemFavouriteProps } from '../../types';
import { useTheme } from '../../theme/useTheme';
import { timeAgo } from '../../utils/timeAgo';

const ItemFavourites = ({ item, styles, onRemove }: ItemFavouriteProps) => {
  const { theme } = useTheme();
  console.log(item.publishedAt);
  console.log(timeAgo(item.publishedAt));
  return (
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

          <Pressable onPress={onRemove}>
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
          <Text style={styles.publishedAt}>{timeAgo(item.publishedAt)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ItemFavourites;
