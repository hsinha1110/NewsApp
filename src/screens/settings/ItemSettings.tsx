import React from 'react';
import { Pressable, Switch, Text, View } from 'react-native';
import { switchColors } from '../../constants/colors';
import { ItemSettingsProps } from '../../types';

const ItemSettings = ({
  styles,
  icon,
  title,
  value,
  hasSwitch = false,
  switchValue,
  onSwitchChange,
  rightIcon,
  onPress,
}: ItemSettingsProps) => {
  const Content = (
    <>
      <View style={styles.left}>
        {icon}
        <Text style={styles.title}>{title}</Text>
      </View>

      {hasSwitch ? (
        <Switch
          value={switchValue}
          onValueChange={onSwitchChange}
          {...switchColors}
        />
      ) : (
        <View style={styles.right}>
          {value && <Text style={styles.value}>{value}</Text>}
          {rightIcon}
        </View>
      )}
    </>
  );

  if (onPress) {
    return (
      <Pressable style={styles.row} onPress={onPress}>
        {Content}
      </Pressable>
    );
  }

  return <View style={styles.row}>{Content}</View>;
};

export default ItemSettings;
