import React from 'react';
import {Text, ImageBackground, TouchableOpacity, View} from 'react-native';

import styles from './articleCard.styles';
import {ArticleDataProps} from './articleCard.types';

const ArticleCard: React.FC<ArticleDataProps> = ({title, imageUrl}) => {
  let imageUri = imageUrl;
  if (!imageUrl) {
    imageUri =
      'https://renonvstakeinfo.org/wp-content/uploads/2019/07/nocontentyet.jpg';
  }
  return (
    <TouchableOpacity style={styles.card}>
      <ImageBackground
        style={styles.image}
        source={{uri: imageUri}}
        resizeMode={'cover'}>
        <View style={styles.description}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default ArticleCard;
