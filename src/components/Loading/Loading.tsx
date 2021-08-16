import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './loading.styles';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={'red'} />
    </View>
  );
};

export default Loading;
