import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  HomeIcon,
  MagnifyingGlassIcon,
  HeartIcon,
  Cog6ToothIcon,
} from 'react-native-heroicons/outline';

import {
  HomeIcon as HomeSolid,
  MagnifyingGlassIcon as MagnifyingGlassSolid,
  HeartIcon as HeartSolid,
  Cog6ToothIcon as Cog6ToothSolid,
} from 'react-native-heroicons/solid';
import * as Screens from '../screens/index';
import Routes from '../constants/Routes';

import { BottomTabParamList } from './types';
import { useTheme } from '../theme/useTheme';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomNavigation = () => {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,

        tabBarStyle: {
          height: 65,
          paddingBottom: 8,
          paddingTop: 8,
          backgroundColor: theme.card,
          borderTopColor: theme.border,
          borderTopWidth: 1,
        },

        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: theme.subText,

        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tab.Screen
        name={Routes.HOME}
        component={Screens.Home}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <HomeSolid size={24} color={theme.primary} />
            ) : (
              <HomeIcon size={24} color={theme.subText} />
            ),
        }}
      />
      <Tab.Screen
        name={Routes.DISCOVER}
        component={Screens.Discover}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MagnifyingGlassSolid size={24} color={theme.primary} />
            ) : (
              <MagnifyingGlassIcon size={24} color={theme.subText} />
            ),
        }}
      />
      <Tab.Screen
        name={Routes.FAVOURITES}
        component={Screens.Favourite}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <HeartSolid size={24} color={theme.primary} />
            ) : (
              <HeartIcon size={24} color={theme.subText} />
            ),
        }}
      />

      <Tab.Screen
        name={Routes.SETTINGS}
        component={Screens.Settings}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Cog6ToothSolid size={24} color={theme.primary} />
            ) : (
              <Cog6ToothIcon size={24} color={theme.subText} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
