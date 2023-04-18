import {Button, StyleSheet, View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getUsername} from '../redux/actions/getUserNameAction.js';
import {getUser} from '../redux/actions/getUserAction.js';

export default function Login() {
  const [userNameInput, setUserNameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const dispatch = useDispatch();
  const userName = useSelector(store => store.userName.userName);
  const userGet = useSelector(store => store.user);
  const user = {userName: userNameInput, password: passwordInput};

  const handleGetUserName = () => {
    dispatch(getUsername(userNameInput));
  };

  const handleGetUser = () => {
    dispatch(getUser(user));
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Username: {userGet.userName} </Text>
      <TextInput
        style={styles.input}
        placeholder="Input username"
        value={userNameInput}
        onChangeText={setUserNameInput}
      />
      <Text style={styles.text}>Password: {userGet.password}</Text>
      <TextInput
        style={styles.input}
        placeholder="Input password"
        secureTextEntry={true}
        value={passwordInput}
        onChangeText={setPasswordInput}
      />
      <Button title="login" onPress={handleGetUser} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 18,
    fontFamily: 'arial',
    margin: 5,
  },
  input: {
    fontSize: 25,
    fontFamily: 'arial',
    borderWidth: 1,
    borderRadius: 15,
    margin: 10,
  },
});
