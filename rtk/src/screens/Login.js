import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {loginAction} from './../actions/userAction';

export default function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const username = useSelector(state => state.user.username);

  function handleLogin() {
    dispatch(loginAction(userName));
  }

  return (
    <View style={styles.container}>
      <View style={styles.horizontalView}>
        <Text style={styles.text}>Username: </Text>
        <TextInput
          style={styles.input}
          placeholder="Input username ...."
          value={userName}
          onChangeText={setUserName}
        />
      </View>
      <View style={styles.horizontalView}>
        <Text style={styles.text}>Password: </Text>
        <TextInput
          style={styles.input}
          placeholder="Input password ...."
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <Button
        style={styles.button}
        title="login"
        color="#6aa84f"
        onPress={handleLogin}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  horizontalView: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  text: {
    fontSize: 18,
    width: '25%',
  },
  input: {
    borderWidth: 1.5,
    borderRadius: 15,
    width: '70%',
    fontSize: 18,
    marginLeft: 10,
  },
});
