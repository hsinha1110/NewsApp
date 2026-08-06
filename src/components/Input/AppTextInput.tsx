import React from 'react';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';

interface AppTextInputProps extends TextInputProps {}

const AppTextInput = (props: AppTextInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        returnKeyType="search"
        placeholderTextColor="#9CA3AF"
        style={styles.input}
      />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    height: 52,
    backgroundColor: '#F3F4F6',
    borderRadius: 16,
    paddingHorizontal: 16,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },

  input: {
    fontSize: 16,
    color: '#111827',
  },
});
