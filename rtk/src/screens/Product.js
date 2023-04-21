import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Flatlist,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchProducts} from './../actions/fetchProducts';

export default function Product() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  let result;

  function handleProductButton() {
    dispatch(fetchProducts());
  }

  function showProducts() {
    if (products.data != null) {
      return products.data.map(item => {
        return (
          <View style={styles.horizontalView} key={item.id}>
            <Image style={styles.image} source={{uri: item.image}} />
            <View style={styles.itemInfoView}>
              <Text>Price: {item.price}</Text>
              <Text>Category: {item.category}</Text>
            </View>
          </View>
        );
      });
    }
  }

  return (
    <ScrollView>
      <View style={styles.verticalView}>
        <Text style={styles.title}>List product</Text>
        <TouchableOpacity style={styles.btn} onPress={handleProductButton}>
          <Text>PRESS HERE</Text>
        </TouchableOpacity>
        {showProducts()}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  verticalView: {
    flexDirection: 'column',
  },
  horizontalView: {
    flexDirection: 'row',
    margin: 10,
  },
  title: {
    fontSize: 20,
    alignSelf: 'center',
  },
  btn: {
    borderWidth: 1,
    margin: 10,
    width: 120,
    height: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#FA8072',
  },
  itemInfoView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
