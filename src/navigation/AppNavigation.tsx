import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/Ionicons';

import NewsScreen from '../screens/NewsStack/NewsScreen';
import DetailScreen from '../screens/NewsStack/DetailScreen';
import SearchScreen from '../screens/SearchScreen/SearchScreen';
import SavedScreen from '../screens/SavedScreen/SavedScreen';
import AccountScreen from '../screens/AccountScreen/AccountScreen';

import {
  NewsStackParamList,
  SearchStackParamList,
  FavoriteStackParamList,
  AccountStackParamList,
  ScreenNames,
  TabsNames,
} from './appNavigation.types';

const screenOptions = {headerTintColor: 'red'};
const NewsStack = createStackNavigator<NewsStackParamList>();

const NewsNavigationStack: React.FC = () => (
  <NewsStack.Navigator screenOptions={screenOptions}>
    <NewsStack.Screen component={NewsScreen} name={ScreenNames.News} />
    <NewsStack.Screen component={DetailScreen} name={ScreenNames.Story} />
  </NewsStack.Navigator>
);

const SearchStack = createStackNavigator<SearchStackParamList>();

const SearchNavigationStack: React.FC = () => (
  <SearchStack.Navigator screenOptions={screenOptions}>
    <SearchStack.Screen component={SearchScreen} name={ScreenNames.Search} />
    <SearchStack.Screen
      component={DetailScreen}
      name={ScreenNames.SearchedStory}
    />
  </SearchStack.Navigator>
);

const FavoriteStack = createStackNavigator<FavoriteStackParamList>();

const FavoriteNavigationStack: React.FC = () => (
  <FavoriteStack.Navigator screenOptions={screenOptions}>
    <FavoriteStack.Screen component={SavedScreen} name={ScreenNames.Saved} />
    <FavoriteStack.Screen
      component={DetailScreen}
      name={ScreenNames.SavedStory}
    />
  </FavoriteStack.Navigator>
);

const AccountStack = createStackNavigator<AccountStackParamList>();

const AccountNavigationStack: React.FC = () => (
  <AccountStack.Navigator screenOptions={screenOptions}>
    <AccountStack.Screen component={AccountScreen} name={ScreenNames.Account} />
  </AccountStack.Navigator>
);

const Tabs = createBottomTabNavigator();

const defaultScreenOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarActiveTintColor: 'red',
};

const Icon = (name: string, color: string) => (
  <Icons name={name} size={30} color={color} />
);

const MainTabNavigator = () => (
  <Tabs.Navigator screenOptions={defaultScreenOptions}>
    <Tabs.Screen
      component={NewsNavigationStack}
      name={TabsNames.NewsTab}
      options={{
        tabBarIcon: ({color}) => Icon('newspaper-outline', color),
      }}
    />
    <Tabs.Screen
      component={SearchNavigationStack}
      name={TabsNames.SearchTab}
      options={{
        tabBarIcon: ({color}) => Icon('search-outline', color),
      }}
    />
    <Tabs.Screen
      component={FavoriteNavigationStack}
      name={TabsNames.FavoriteTab}
      options={{
        tabBarIcon: ({color}) => Icon('bookmark-outline', color),
      }}
    />
    <Tabs.Screen
      component={AccountNavigationStack}
      name={TabsNames.AccountTab}
      options={{
        tabBarIcon: ({color}) => Icon('person-outline', color),
      }}
    />
  </Tabs.Navigator>
);

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <MainTabNavigator />
    </NavigationContainer>
  );
};

export default AppNavigation;
