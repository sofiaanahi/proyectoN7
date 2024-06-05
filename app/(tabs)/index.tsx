import { Image, StyleSheet, Platform, View, Text, TextInput, TouchableOpacity  } from 'react-native'; 
import React, { useState } from 'react';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';


export default function HomeScreen() {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const handleLogin = () => {
    // Implementa la lógica de inicio de sesión aquí
    // Aquí puedes realizar las validaciones necesarias, como verificar si el usuario y la contraseña son válidos
    // Puedes utilizar librerías de autenticación como Firebase o implementar tu propia lógica de autenticación
    // Una vez que hayas validado los datos, puedes realizar las acciones necesarias, como redirigir al usuario a otra pantalla

  }

  const handleRegister = () => {
    // Implementa la lógica de registro aquí
    // Aquí puedes realizar las validaciones necesarias, como verificar si el nombre de usuario ya está en uso
    // Puedes utilizar librerías de autenticación como Firebase o implementar tu propia lógica de registro
    // Una vez que hayas validado los datos, puedes realizar las acciones necesarias, como redirigir al usuario a otra pantalla
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

      <ThemedView style={styles.buttonConteiner}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <ThemedText style={styles.buttonText}>Iniciar Sesión</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <ThemedText style={styles.buttonText}> Registrarse </ThemedText>
        </TouchableOpacity>
      </ThemedView >
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3
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
    fontSize: 25
  },
  text: {
    color:'#80B315',
    fontSize: 20,
    fontWeight: 'bold',
    
  }
});


