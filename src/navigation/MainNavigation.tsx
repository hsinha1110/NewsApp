import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Routes from '../constants/Routes';
import BottomNavigation from './BottomNavigation';
import * as Screens from '../screens';
import { MainStackParamList } from './types';

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Routes.BOTTOM_TAB} component={BottomNavigation} />

      <Stack.Screen
        name={Routes.NEWS_DETAILS}
        component={Screens.NewsDetails}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
