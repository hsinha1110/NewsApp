import React from 'react';
import { Text } from 'react-native';
import AppTextInput from '../../components/Input/AppTextInput';
import { HomeHeaderProps } from '../../types';
import BreakingNews from './BreakingNews';

const HomeHeader = ({
  search,
  setSearch,
  handleSearch,
  navigation,
  breakingNews,
  styles,
}: HomeHeaderProps) => {
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
    </>
  );
};

export default HomeHeader;
