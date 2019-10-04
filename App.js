import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';

import bgImage from './assets/background.jpg';
import logo from './assets/logo2.png';
import Icon from 'react-native-vector-icons/FontAwesome';

const {width: WIDTH} = Dimensions.get('window');

export default function App() {

  const [showPassword, setShowPassword] = useState(true);

  const showPasswordHandler = () => {
    if (showPassword === true)
      setShowPassword(false);
    else
      setShowPassword(true);
  }

  return (
    <ImageBackground source={bgImage} style={styles.backgroundContainer}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.logoText}>REACT NATIVE</Text>
      </View>

      <View style={styles.inputContainer}>
        <Icon name={'user'} size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder={'Username'}
          placeholderTextColor='rgba(255, 255, 255, 0.7)'
          underlineColorAndroid='transparent'
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name={'lock'} size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder={'Password'}
          secureTextEntry={showPassword}
          placeholderTextColor='rgba(255, 255, 255, 0.7)'
          underlineColorAndroid='transparent'
        />

        <TouchableOpacity style={styles.btnEye}
          onPress={showPasswordHandler}>
          <Icon name={showPassword == false ? 'eye': 'eye'} size={26} color={'rgba(255, 255, 255, 0.7)'}/>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.btnLogin}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50
  },
  logo: {
    width: 120,
    height: 120
  },
  logoText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
    opacity: 0.5
  },
  inputContainer: {
    marginTop: 10
  },
  input: {
    width: WIDTH -55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25
  },
  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 37
  },
  btnEye: {
    position: 'absolute',
    top: 8,
    right: 37
  },
  btnLogin: {
    width: WIDTH -55,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#432577',
    justifyContent: 'center',
    marginTop: 20
  },
  text: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    textAlign: 'center'
  }
});
