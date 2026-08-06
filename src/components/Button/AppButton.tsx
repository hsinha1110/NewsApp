import React, { useMemo } from 'react';
import { Pressable, Text } from 'react-native';

import { useTheme } from '../../theme/useTheme';
import getStyles from './styles';

type Props = {
  title: string;
  onPress: () => void;
};

const AppButton = ({ title, onPress }: Props) => {
  const { theme } = useTheme();

  const styles = useMemo(() => getStyles(theme), [theme]);

  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

export default AppButton;
