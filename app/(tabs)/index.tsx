import { Image, StyleSheet, Platform, View, Text, TextInput, TouchableOpacity  } from 'react-native'; 
import React, { useState } from 'react';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation, Link } from 'expo-router';



export default function HomeScreen() {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [showLoginFields, setShowLoginFields] = useState(false);
  const [showRegisterFields, setShowRegisterFields] = useState(false);



  const handleLogin = () => {
    setShowLoginFields(true);
    setShowRegisterFields(false);
  }

  const handleRegister = () => {
    setShowLoginFields(false);
    setShowRegisterFields(true);
  }

  const handleLoginSubmit = () => {
    console.log('validacion inicio', loginUsername, loginPassword);
  }

  const handleRegisterSubmit = () => {
    console.log('validacion registro', registerEmail, registerPassword, registerUsername);
  }



  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#80B315', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/vector.jpg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title"> MundoTarea </ThemedText>
        <ThemedText style={styles.text}> Organiza tu vida academica </ThemedText>
        <HelloWave/>
      </ThemedView >

      <ThemedView >

        {showLoginFields && (
          <View style= {styles.inputContainer}>
            <TextInput
            placeholder='Nombre de usuario'
            value={loginUsername}
            onChangeText={text => setLoginUsername(text)}
            style={styles.input} 
            />

            <TextInput
            placeholder='Contraseña'
            value={loginPassword}
            onChangeText={text => setLoginPassword(text)}
            secureTextEntry={true}
            style={styles.input}           
            />
            
            <ThemedView style={styles.buttonConteiner}>
            
            <TouchableOpacity style={styles.button} onPress={handleLoginSubmit}>
              <ThemedText style={styles.buttonText}>Iniciar Sesión</ThemedText>
            </TouchableOpacity>
           
            </ThemedView>
          </View>
        )}


        {showRegisterFields && (
            <View style={styles.inputContainer}>
              <TextInput
              placeholder='Correo Electronico'
              value={registerEmail}
              onChangeText={text => setRegisterEmail(text)}
              style={styles.input}
              />
              <TextInput
              placeholder='Nombre de Usuario'
              value={registerUsername}
              onChangeText={Text => setRegisterUsername(Text)}
              style={styles.input}
              />
              <TextInput
              placeholder='Contraseña'
              value={registerPassword}
              onChangeText={text => setRegisterPassword(text)}
              secureTextEntry={true}
              style={styles.input}
              />
              <ThemedView style={styles.buttonConteiner}>
              <TouchableOpacity style={styles.button} onPress={handleRegisterSubmit}>
                <ThemedText style={styles.buttonText}> Registrarse </ThemedText>
              </TouchableOpacity>
              </ThemedView>
            </View>
        )}

        {!showLoginFields && ! showRegisterFields && (
          <ThemedView style={styles.buttonConteiner}>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <ThemedText style={styles.buttonText}>Inicia Sesión</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
              <ThemedText style={styles.buttonText}>Registrarse</ThemedText>
            </TouchableOpacity>
          </ThemedView>
        )}       
      </ThemedView >
    </ParallaxScrollView>
  );
}




const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  reactLogo: {
    height: 180,
    width: 360,
    bottom: 0,
    left: 0,
    alignContent: 'center',
    top: 22,
    alignSelf: 'center',
    borderRadius: 7,
    
  },
  buttonConteiner: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 30,
    gap: 20,
    marginTop: 12,
  },
  button: {
    backgroundColor: '#80B315', // Cambia el color de fondo del botón aquí
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white', // Cambia el color del texto del botón aquí
    fontSize: 25,
    fontWeight: 'bold'
  },
  text: {
    color:'#80B315',
    fontSize: 20,
    fontWeight: 'bold',
    
  },
  inputContainer: {
    marginTop: 20,
    paddingHorizontal: 30
  },
  input:{
    marginBottom: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5    
  }
});