import React, { useState } from 'react';
import { ScrollView, Text, View, Pressable } from 'react-native';
import AppTextInput from '../../components/Input/AppTextInput';
import getStyles from './styles';
import { useTheme } from '../../theme/useTheme';
import { CATEGORIES, COUNTRIES } from '../../constants/categories';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppButton from '../../components/Button/AppButton';
import { useAppDispatch } from '../../redux/hooks/hooks';
import { setFilters } from '../../redux/slices/filterSlice';
import { useNavigation } from '@react-navigation/native';
import Routes from '../../constants/Routes';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from '../../navigation/types';

const Discover = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [country, setCountry] = useState('India');
  const { theme } = useTheme();
  const styles = getStyles(theme);
  const dispatch = useAppDispatch();
  type NavigationProp = BottomTabNavigationProp<BottomTabParamList>;

  const navigation = useNavigation<NavigationProp>();
  const handleApply = () => {
    dispatch(
      setFilters({
        search,
        category,
        country,
      }),
    );

    navigation.navigate(Routes.HOME);
  };
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
        <AppButton title="Apply" onPress={handleApply} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Discover;
