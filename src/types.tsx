export interface GetNewsParams {
  q?: string;
  country?: string;
  page: number;
  pageSize: number;
}
export interface NewsArticle {
  url: string;
  title: string;
  description: string;
  urlToImage: string;
  publishedAt: string;
  source: {
    id: string | null;
    name: string;
  };
}
export interface FavouriteState {
  favourites: NewsArticle[];
  loading: boolean;
  error: string;
}

export type ItemSettingsProps = {
  styles: any;
  icon: React.ReactNode;
  title: string;
  value?: string;
  hasSwitch?: boolean;
  switchValue?: boolean;
  onSwitchChange?: (value: boolean) => void;
  rightIcon?: React.ReactNode;
  onPress?: () => void;
};

export type ItemFavouriteProps = {
  item: any;
  styles: any;
  onRemove: () => void;
};
