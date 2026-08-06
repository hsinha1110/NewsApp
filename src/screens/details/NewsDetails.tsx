import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import { useRoute, RouteProp } from '@react-navigation/native';
import { MainStackParamList } from '../../navigation/types';
import Routes from '../../constants/Routes';

const NewsDetails = () => {
  const route = useRoute<RouteProp<MainStackParamList, Routes.NEWS_DETAILS>>();
  const { url } = route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView source={{ uri: url }} startInLoadingState />
    </SafeAreaView>
  );
};

export default NewsDetails;
