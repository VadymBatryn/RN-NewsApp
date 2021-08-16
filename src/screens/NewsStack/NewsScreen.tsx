import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import NewsList from '../../components/NewsList/NewsList';
import SkeletonList from '../../components/NewsList/SkeletonList/SkeletonList';
import {RootState} from '../../store/configureStore';
import {fetchNews} from '../../store/NewsSlice/newsSlice';

const NewsScreen: React.FC = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector((state: RootState) => state.news.isLoading);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <View style={styles.screen}>
      {isLoading ? <SkeletonList /> : <NewsList />}
    </View>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
});
