import React from 'react';
import {RefreshControl, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/configureStore';
import ArticleCard from '../ArticleCard/ArticleCard';

const NewsList = () => {
  const news = useSelector((state: RootState) => state.news.news);

  return (
    <FlatList
      data={news?.articles}
      renderItem={({item}) => (
        <ArticleCard title={item.title} imageUrl={item.urlToImage} />
      )}
      keyExtractor={item => item.source.id + item.publishedAt + item.author}
      refreshControl={
        <RefreshControl
          refreshing={false}
          onRefresh={() => console.log('refresh')}
        />
      }
    />
  );
};

export default NewsList;
