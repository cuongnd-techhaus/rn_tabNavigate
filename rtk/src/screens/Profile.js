import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {loginAction, updateUserAction} from './../actions/userAction';
import {useSelector, useDispatch} from 'react-redux';

export default function Profile() {
  const username = useSelector(state => state.user.username);
  const firstname = useSelector(state => state.user.firstname);
  const cityGet = useSelector(state => state.user.city);
  const [firstName, setFirstName] = useState('');
  const [city, setCity] = useState('');

  const userInfo = {
    newFirstName: firstName,
    newCity: city,
  };

  const dispatch = useDispatch();

  function handleUpdateButton() {
    dispatch(updateUserAction(userInfo));
  }

  return (
    <View style={styles.verticalView}>
      <View style={styles.horizontalView}>
        <Text style={styles.textSize17}>Username:</Text>
        <Text style={styles.input}>{username}</Text>
      </View>
      <View style={styles.horizontalView}>
        <Text style={styles.textSize17}>First name: </Text>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={setFirstName}
          placeholder={firstname}
        />
      </View>
      <View style={styles.horizontalView}>
        <Text style={styles.textSize17}>City: </Text>
        <TextInput
          style={styles.input}
          value={city}
          onChangeText={setCity}
          placeholder={cityGet}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleUpdateButton}>
        <Text style={styles.textButton}>
          UPDATE
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  verticalView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  horizontalView: {
    marginTop: 7,
    marginBottom: 7,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    margin: 5,
    fontSize: 20,
    borderRadius: 10,
    borderWidth: 1.5,
    height: 40,
    width: '70%',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  textSize17: {
    margin: 5,
    fontSize: 17,
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#3CBA4C',
    width: '30%',
    height: 40,
    borderRadius: 10,
    borderWidth: 1.5,
    justifyContent: 'center',
  },
  textButton:{
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  }
});
