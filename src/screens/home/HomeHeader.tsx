import React from 'react';
import { Text } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import BreakingNews from './BreakingNews';
import CategoryList from './CategoryList';
import AppTextInput from '../../components/Input/AppTextInput';

import { NewsArticle } from '../../types';
import { MainStackParamList } from '../../navigation/types';

type NavigationProp = NativeStackNavigationProp<MainStackParamList>;

type Props = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;

  navigation: NavigationProp;

  breakingNews: NewsArticle[];

  selectedCategory: string;
  onCategoryPress: (category: string) => void;

  styles: any;
};

const HomeHeader = ({
  search,
  setSearch,
  handleSearch,
  navigation,
  breakingNews,
  selectedCategory,
  onCategoryPress,
  styles,
}: Props) => {
  return (
    <>
      <AppTextInput
        placeholder="Search news..."
        value={search}
        onChangeText={setSearch}
        returnKeyType="search"
        onSubmitEditing={handleSearch}
      />

      <Text style={styles.sectionTitle}>Breaking News</Text>

      <BreakingNews
        breakingNews={breakingNews}
        navigation={navigation}
        styles={styles}
      />

      <Text style={styles.heading}>Top Headlines</Text>

      <CategoryList
        selectedCategory={selectedCategory}
        onCategoryPress={onCategoryPress}
        styles={styles}
      />
    </>
  );
};

export default HomeHeader;
