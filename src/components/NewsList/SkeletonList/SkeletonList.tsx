import React from 'react';
import {View} from 'react-native';
import SkeletonListItem from './SkeletonListItem/SkeletonListItem';

const SkeletonList = () => {
  return (
    <View>
      {Array(3)
        .fill(null)
        .map((_, index) => (
          <SkeletonListItem key={index} />
        ))}
    </View>
  );
};

export default SkeletonList;
