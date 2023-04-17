import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  RefreshControl,
  Image,
} from 'react-native';
import {Lists} from './data.js';

const App = () => {
  const [refreshing, setRefreshing] = useState(false);

  function onRefresh() {
    setRefreshing(true);
    setRefreshing(false);
  }

  let List2 = Lists.filter(item => {
    return item.id !== 2;
  }).map(function ({id, value, category, imageLink}) {
    return {id, value, category, imageLink};
  });

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.container}>
        <Text style={styles.text}> Number item: {List2.length}</Text>
        {List2.map(item => {
          return (
            <View key={item.id} style={styles.item}>
              <Image
                style={styles.image}
                source={{uri: item.imageLink}}></Image>
              <Text style={styles.text}>{item.value}</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  item: {
    flexDirection: 'row',
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
  },
  text: {
    fontSize: 30,
    color: 'black',
  },
  image: {
    margin: 30,
    width: 75,
    height: 75,
  },
});

export default App;
