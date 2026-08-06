import React, { useState } from 'react';
import { ScrollView, Text, View, Pressable } from 'react-native';
import AppTextInput from '../../components/Input/AppTextInput';
import getStyles from './styles';
import { useTheme } from '../../theme/useTheme';
import { CATEGORIES, COUNTRIES } from '../../constants/categories';
import { SafeAreaView } from 'react-native-safe-area-context';

const Discover = () => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [country, setCountry] = useState('India');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>Discover</Text>

        <AppTextInput
          placeholder="Search news..."
          value={search}
          onChangeText={setSearch}
        />

        <Text style={styles.title}>Categories</Text>

        <View style={styles.wrap}>
          {CATEGORIES.map(item => (
            <Pressable
              key={item}
              style={[styles.chip, category === item && styles.selectedChip]}
              onPress={() => setCategory(item)}
            >
              <Text
                style={[
                  styles.chipText,
                  category === item && styles.selectedChipText,
                ]}
              >
                {item}
              </Text>
            </Pressable>
          ))}
        </View>

        <Text style={styles.title}>Country</Text>

        <View style={styles.wrap}>
          {COUNTRIES.map(item => (
            <Pressable
              key={item}
              style={[styles.chip, country === item && styles.selectedChip]}
              onPress={() => setCountry(item)}
            >
              <Text
                style={[
                  styles.chipText,
                  country === item && styles.selectedChipText,
                ]}
              >
                {item}
              </Text>
            </Pressable>
          ))}
        </View>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Search</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Discover;
