import React from 'react';
import ContentLoader, {Rect} from 'react-content-loader/native';
import {View} from 'react-native';

import {SCREEN_WIDTH} from '../../../../constants/screen';

const SkeletonListItem = () => {
  const SCREEN_WIDTH_WITHOUT_PADDING = SCREEN_WIDTH - 30;
  return (
    <View>
      <ContentLoader
        width={SCREEN_WIDTH_WITHOUT_PADDING}
        height={'310'}
        viewBox={`0 0 ${SCREEN_WIDTH_WITHOUT_PADDING} 300`}>
        <Rect
          x="0"
          y="0"
          rx="5"
          ry="5"
          width={SCREEN_WIDTH_WITHOUT_PADDING}
          height={300}
        />
        <Rect x="15" y="240" rx="5" width={50} height={10} />
        <Rect x="75" y="240" rx="5" width={70} height={10} />
        <Rect x="155" y="240" rx="5" width={140} height={10} />
        <Rect x="305" y="240" rx="5" width={50} height={10} />
        <Rect x="15" y="260" rx="5" width={70} height={10} />
        <Rect x="95" y="260" rx="5" width={140} height={10} />
        <Rect x="245" y="260" rx="5" width={50} height={10} />
        <Rect x="305" y="260" rx="5" width={40} height={10} />
        <Rect x="15" y="280" rx="5" width={40} height={10} />
        <Rect x="65" y="280" rx="5" width={50} height={10} />
        <Rect x="125" y="280" rx="5" width={70} height={10} />
      </ContentLoader>
    </View>
  );
};

export default SkeletonListItem;
