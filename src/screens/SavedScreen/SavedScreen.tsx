import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/configureStore';
import {setFavorite} from '../../store/SearchSlice/seachSlice';

const SavedScreen = () => {
  const isFavorite = useSelector((state: RootState) => state.search.isFav);
  const dispatch = useDispatch();
  const renderIcon = (name: string, color: string) => (
    <Icons name={name} size={50} color={color} />
  );

  const saveToFavorite = () => {
    dispatch(setFavorite('1'));
  };

  return (
    <View style={styles.screen}>
      {/* <Icons name={'bookmark-outline'} size={100} color={'#ccc'} />
      <Text style={styles.title}>
        Nothing here yet.{'\n'}Let's add something
      </Text> */}
      <TouchableOpacity onPress={saveToFavorite}>
        {isFavorite.includes('1')
          ? renderIcon('star', '#f33')
          : renderIcon('star-outline', '#f33')}
      </TouchableOpacity>
    </View>
  );
};

export default SavedScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    color: '#ccc',
    maxWidth: '80%',
    textAlign: 'center',
  },
});
