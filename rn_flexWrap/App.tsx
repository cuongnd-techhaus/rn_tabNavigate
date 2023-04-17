import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {DATA} from './data.js';

const App = () => {
  return (
    <View style={styles.container}>
      {
      DATA.map(item => {
        return (
          <View key={item.id} style={styles.item}>
            <Text style={styles.text}> {item.value} </Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  item: {
    backgroundColor: '#E06666',
    width: 120,
    height: 60,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 15,
  },
  text:{
    fontSize: 20,
    color: '#8FCE00',
  },
});

export default App;
