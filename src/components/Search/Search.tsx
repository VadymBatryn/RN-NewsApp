import React, {useState} from 'react';
import {TextInput, View, TouchableOpacity, Keyboard} from 'react-native';
import {useDispatch} from 'react-redux';
import Icons from 'react-native-vector-icons/Ionicons';

import styles from './search.styles';

import {searchNews} from '../../store/SearchSlice/seachSlice';

const Search: React.FC = () => {
  const dispatch = useDispatch();

  const [text, setText] = useState('');

  const searchNewsHandler = () => {
    Keyboard.dismiss();
    dispatch(searchNews(text.trim()));
    setText('');
  };

  return (
    <View style={styles.searchContainer}>
      <TextInput
        placeholder="What are you interest in?"
        placeholderTextColor="#999"
        style={styles.searchInput}
        onChangeText={setText}
        value={text}
      />
      <TouchableOpacity style={styles.container} onPress={searchNewsHandler}>
        <Icons name={'search-outline'} size={20} color={'#000'} />
      </TouchableOpacity>
    </View>
  );
};

export default Search;
