import React from 'react';
import { FlatList, Pressable, Text } from 'react-native';
import { CATEGORIES } from '../../constants/categories';

type Props = {
  selectedCategory: string;
  onCategoryPress: (category: string) => void;
  styles: any;
};

const CategoryList = ({ selectedCategory, onCategoryPress, styles }: Props) => {
  return (
    <FlatList
      horizontal
      data={CATEGORIES}
      keyExtractor={item => item}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.categoryContainer}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => onCategoryPress(item)}
          style={[
            styles.categoryChip,
            selectedCategory === item && styles.selectedChip,
          ]}
        >
          <Text
            style={[
              styles.categoryText,
              selectedCategory === item && styles.selectedText,
            ]}
          >
            {item}
          </Text>
        </Pressable>
      )}
    />
  );
};

export default CategoryList;
