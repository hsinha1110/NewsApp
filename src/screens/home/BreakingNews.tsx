import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Routes from '../../constants/Routes';
import { NewsArticle } from '../../types';
import { MainStackParamList } from '../../navigation/types';

type NavigationProp = NativeStackNavigationProp<MainStackParamList>;

type Props = {
  breakingNews: NewsArticle[];
  navigation: NavigationProp;
  styles: any;
};

const BreakingNews = ({ breakingNews, navigation, styles }: Props) => {
  if (breakingNews.length === 0) return null;

  return (
    <View style={styles.swiperContainer}>
      <Swiper
        autoplay
        loop
        autoplayTimeout={3}
        dotColor="#D1D5DB"
        activeDotColor="#EF4444"
        paginationStyle={styles.pagination}
      >
        {breakingNews.map(item => (
          <Pressable
            key={item.url}
            onPress={() =>
              navigation.navigate(Routes.NEWS_DETAILS, {
                url: item.url,
              })
            }
          >
            <Image
              source={{
                uri: item.urlToImage ?? 'https://via.placeholder.com/600x300',
              }}
              style={styles.breakingImage}
            />

            <View style={styles.overlay}>
              <Text numberOfLines={2} style={styles.breakingTitle}>
                {item.title}
              </Text>

              <Text style={styles.breakingSource}>{item.source?.name}</Text>
            </View>
          </Pressable>
        ))}
      </Swiper>
    </View>
  );
};

export default BreakingNews;
