import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { HeartIcon as HeartOutline } from 'react-native-heroicons/outline';
import { HeartIcon as HeartSolid } from 'react-native-heroicons/solid';

import { useTheme } from '../../theme/useTheme';
import { NewsArticle } from '../../types';

type Props = {
  item: NewsArticle;
  isFavourite: boolean;
  styles: any;
  onFavourite: () => void;
  onPress: () => void;
};

const ItemNews = ({
  item,
  isFavourite,
  styles,
  onFavourite,
  onPress,
}: Props) => {
  const { theme } = useTheme();

  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Image
        source={{
          uri: item.urlToImage || 'https://via.placeholder.com/600x300',
        }}
        style={styles.image}
      />

      <View style={styles.content}>
        <View style={styles.headerRow}>
          <Text style={styles.source}>{item.source?.name}</Text>

          <Pressable onPress={onFavourite}>
            {isFavourite ? (
              <HeartSolid size={24} color={theme.primary} />
            ) : (
              <HeartOutline size={24} color={theme.subText} />
            )}
          </Pressable>
        </View>

        <Text numberOfLines={2} style={styles.title}>
          {item.title}
        </Text>

        <Text numberOfLines={3} style={styles.description}>
          {item.description}
        </Text>

        <View style={styles.footer}>
          <Text style={styles.publishedAt}>
            {item.publishedAt?.split('T')[0]}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ItemNews;
