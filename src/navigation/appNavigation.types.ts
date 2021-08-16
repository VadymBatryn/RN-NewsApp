export enum ScreenNames {
  News = 'News',
  Story = 'Story',
  Search = 'Search',
  SearchedStory = 'SearchedStory',
  Saved = 'Saved',
  SavedStory = 'SavedStory',
  Account = 'Account',
}

export enum TabsNames {
  NewsTab = 'NewsTab',
  SearchTab = 'SearchTab',
  FavoriteTab = 'FavoriteTab',
  AccountTab = 'AccountTab',
}

export type NewsStackParamList = {
  [ScreenNames.News]: undefined;
  [ScreenNames.Story]: undefined;
};

export type SearchStackParamList = {
  [ScreenNames.Search]: undefined;
  [ScreenNames.SearchedStory]: undefined;
};

export type FavoriteStackParamList = {
  [ScreenNames.Saved]: undefined;
  [ScreenNames.SavedStory]: undefined;
};

export type AccountStackParamList = {
  [ScreenNames.Account]: undefined;
};
