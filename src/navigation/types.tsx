import Routes from '../constants/Routes';

export type MainStackParamList = {
  [Routes.BOTTOM_TAB]: undefined;

  [Routes.NEWS_DETAILS]: {
    url: string;
  };
};

export type BottomTabParamList = {
  [Routes.HOME]: undefined;
  [Routes.FAVOURITES]: undefined;
  [Routes.SETTINGS]: undefined;
  [Routes.DISCOVER]: {
    country?: string;
    category?: string;
    keyword?: string;
  };
};
