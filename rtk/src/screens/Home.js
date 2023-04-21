import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchBag} from './../actions/fetchBagProduct';

export default function Home() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const bag = useSelector(state => state.bag);

  function handleGetBagButton() {
    dispatch(fetchBag());
    console.log(bag);
  }

  function showBagInfo() {
    return (
      <View style={styles.verticalView}>
        <Text style={styles.text}>
          Price: {bag.data == null ? 'No information' : bag.data.price}{' '}
        </Text>

        <Text style={styles.text}>
          Category: {bag.data == null ? 'No information' : bag.data.category}{' '}
        </Text>
        <Text style={styles.text}>
          Discription:{' '}
          {bag.data == null ? 'No information' : bag.data.description}{' '}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.verticalView}>
      <View style={styles.horizontalView}>
        <Text style={styles.text}>Hello: {user.firstname}</Text>
        <Text style={styles.text}>Username: {user.username}</Text>
      </View>
      <Button title="Get bag" onPress={handleGetBagButton} />
      <Image
        style={styles.image}
        source={{
          uri:
            bag.data == null
              ? 'https://reactnative.dev/img/tiny_logo.png'
              : bag.data.image,
        }}
      />
      {showBagInfo()}
    </View>
  );
}

const styles = StyleSheet.create({
  verticalView: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  horizontalView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  text: {
    margin: 5,
    fontSize: 16,
  },
  image: {
    margin: 20,
    width: 100,
    height: 100,
  },
});
