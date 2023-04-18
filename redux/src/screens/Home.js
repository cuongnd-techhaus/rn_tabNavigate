import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getUsername} from '../redux/actions/getUserNameAction.js';
import {getUser} from '../redux/actions/getUserAction.js';
import {updateEmail} from '../redux/actions/updateAction.js';

export default function Home() {
  const dispatch = useDispatch();
  const userName = useSelector(store => store.userName.userName);
  const user = useSelector(store => store.user);
  const userInfo = useSelector(store => store.personalInfo);

  /* const handleGetUserName = () => {
    dispatch(getUsername);
  };

  const handleGetUser = () => {
    dispatch(getUser);
  }; */

  return (
    <View style={styles.verticalView}>
      <Text>Username: {user.userName} </Text>
      <Text>Password: {user.password} </Text>
      <Text>Email: {userInfo.email} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  verticalView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
});
