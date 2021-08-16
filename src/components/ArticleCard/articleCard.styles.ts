import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  card: {
    width: '100%',
    height: 300,
    backgroundColor: 'rgba(200,200,200,0.7)',
    marginVertical: 5,
    borderRadius: 5,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'left',
  },
  description: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    maxHeight: '40%',
    padding: 5,
  },
});
