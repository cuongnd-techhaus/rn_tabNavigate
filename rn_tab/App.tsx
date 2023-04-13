import React, {useState, useRef, useEffect} from 'react';
import {
  Button,
  View,
  Text,
  TextInput,
  StyleSheet,
  Animated,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

function LoginScreen({navigation, route}) {
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');

  return (
    <View style={styles.verticalView}>
      <Text style={styles.messageLoginView}>{route.params?.message}</Text>
      <Text style={styles.textLoginView}>Username:</Text>
      <TextInput
        style={styles.input}
        placeholder="Input username"
        value={userName}
        onChangeText={setUserName}></TextInput>
      <Text style={styles.textLoginView}>Password:</Text>
      <TextInput
        style={styles.input}
        placeholder="Input password"
        secureTextEntry={true}
        value={passWord}
        onChangeText={setPassWord}></TextInput>
      <View style={styles.horizontalView}>
        <Button
          color="#6AA84F"
          title="Login"
          style={styles.buttons}
          onPress={() => {
            navigation.navigate({
              name: 'Home',
              params: {userName: userName},
              merge: true,
            });
          }}></Button>
        <Button
          color="#6AA84F"
          style={styles.buttons}
          title="Register"
          onPress={() => {
            navigation.navigate('Register');
          }}></Button>
      </View>
    </View>
  );
}

function RegisterScreen({navigation}) {
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');

  return (
    <View style={styles.verticalView}>
      <Text style={styles.textLoginView}>Username:</Text>
      <TextInput
        style={styles.input}
        placeholder="Input username"
        value={userName}
        onChangeText={setUserName}
        keyboardType="default"></TextInput>
      <Text style={styles.textLoginView}>Password:</Text>
      <TextInput
        style={styles.input}
        placeholder="Input password"
        value={passWord}
        onChangeText={setPassWord}
        keyboardType="default"
        secureTextEntry={true}></TextInput>
      <View style={styles.horizontalView}>
        <Button
          color="#6AA84F"
          title="Register"
          onPress={() => {
            navigation.navigate({
              name: 'Login',
              params: {message: 'Login success!'},
              merge: true,
            });
          }}></Button>
      </View>
    </View>
  );
}

function HomeScreen({navigation, route}) {
  const animatedOpacity = useRef(new Animated.Value(0)).current;

  function fadeIn() {
    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  }

  function fadeOut() {
    Animated.timing(animatedOpacity, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }

  function Blink(props) {
    const [isShowingText, setIsShowingText] = useState(true);

    useEffect(() => {
      const toggle = setInterval(() => {
        setIsShowingText(!isShowingText);
      }, 2000);

      return () => clearInterval(toggle);
    });

    if (!isShowingText) {
      return null;
    }

    return <Text style={props.styleBlinkText}> {props.text} </Text>;
  }

  return (
    <View>
      <Text style={styles.messageLoginView}>User: {route.params?.userName}</Text>
      <Animated.View
        style={[
          styles.animatedContainer,
          {
            opacity: animatedOpacity,
          },
        ]}>
        <Text style={styles.fadingText}>Animation Text</Text>
      </Animated.View>
      <View style={styles.horizontalView}>
        <Button title="Fade in view" onPress={fadeIn} />
        <Button title="Fade out view" onPress={fadeOut} />
      </View>
      <View style={styles.blinkTextContainer}>
        <Blink styleBlinkText={styles.blinkTextView} text="Blink text" />
        <Blink styleBlinkText={styles.blinkTextView} text="Blinking is so great" />
      </View>
    </View>
  );
}

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function LoginPage() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="LoginPage" >
        <Drawer.Screen name="LoginPage" component={LoginPage} />
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App;

const styles = StyleSheet.create({
  verticalView: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  horizontalView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  animatedContainer: {
    margin: 20,
    padding: 30,
    backgroundColor: '#F254B0',
  },
  textLoginView: {
    color: 'black',
    fontFamily: 'arial',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    margin: 5,
    borderWidth: 0.5,
    borderRadius: 15,
  },
  buttons: {
    marginRight: 20,
  },
  messageLoginView: {
    color: 'red',
    fontFamily: 'Arial',
    fontSize: 25,
    fontWeight: 'bold',
  },
  fadingText: {
    fontSize: 30,
  },
  blinkTextContainer: {
    margin: 50,
  },
  blinkTextView:{
    fontSize: 30,
  }
});
