import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {updateEmail} from '../redux/actions/updateAction.js';

export default function Profile() {
  const dispatch = useDispatch();
  const info = useSelector(store => store.personalInfo);
  const [email, setEmail] = useState('');

  const handleUpdateEmail = () => {
    dispatch(updateEmail(email));
  };

  return (
    <View>
      <Text>email : {info.email}</Text>
      <TextInput
        placeholder="input new email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity onPress={handleUpdateEmail} style={styles.button}>
        <Text style={styles.text}>Update email</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    margin: 20,
    height: 50,
    width: '90%',
    borderRadius: 15,
    borderWidth: 1.5,
  },
  button: {
    height: 50,
    width: '50%',
    backgroundColor: '#D07B95',
    margin: 20,
    borderRadius: 15,
    borderWidth: 1.5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
});
