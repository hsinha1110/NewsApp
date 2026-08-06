import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  MoonIcon,
  BellIcon,
  GlobeAltIcon,
  ChevronRightIcon,
} from 'react-native-heroicons/outline';

import getStyles from './styles';
import { useTheme } from '../../theme/useTheme';
import { moreItems } from '../../constants/categories';
import ItemSettings from './ItemSettings';

const Settings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const { theme, isDark, toggleTheme } = useTheme();
  const styles = getStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>Settings</Text>
        <View style={styles.card}>
          <ItemSettings
            styles={styles}
            icon={<MoonIcon size={22} color={theme.text} />}
            title="Dark Mode"
            hasSwitch
            switchValue={isDark}
            onSwitchChange={toggleTheme}
          />

          <View style={styles.divider} />

          <ItemSettings
            styles={styles}
            icon={<BellIcon size={22} color={theme.text} />}
            title="Notifications"
            hasSwitch
            switchValue={notificationsEnabled}
            onSwitchChange={setNotificationsEnabled}
          />

          <View style={styles.divider} />

          <ItemSettings
            styles={styles}
            icon={<GlobeAltIcon size={22} color={theme.text} />}
            title="Language"
            value="English"
            rightIcon={<ChevronRightIcon size={18} color={theme.subText} />}
          />
        </View>

        {/* More */}

        <Text style={styles.section}>More</Text>

        <View style={styles.card}>
          {moreItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <React.Fragment key={item.title}>
                <ItemSettings
                  styles={styles}
                  icon={<Icon size={22} color={theme.text} />}
                  title={item.title}
                  rightIcon={
                    <ChevronRightIcon size={18} color={theme.subText} />
                  }
                  onPress={() => {}}
                />

                {index !== moreItems.length - 1 && (
                  <View style={styles.divider} />
                )}
              </React.Fragment>
            );
          })}
        </View>

        <Text style={styles.version}>Version 1.0.0</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
