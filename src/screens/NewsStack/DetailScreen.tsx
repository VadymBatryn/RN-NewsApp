import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const DetailScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Detail Screen</Text>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
});
