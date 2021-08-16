import React from 'react';
import {StyleSheet, View} from 'react-native';
import Search from '../../components/Search/Search';

const SearchScreen = () => {
  return (
    <View style={styles.screen}>
      <Search />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
  },
});
