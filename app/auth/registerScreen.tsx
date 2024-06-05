import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function RegisterScreen({ navigation }: { navigation: any }) {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const handleRegisterSubmit = () => {
    console.log('Validando registro:', registerEmail, registerUsername, registerPassword);
    // Aquí iría la lógica de registro
  };

  const handleLoginRedirect = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <ThemedView>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Correo Electrónico'
          value={registerEmail}
          onChangeText={text => setRegisterEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder='Nombre de Usuario'
          value={registerUsername}
          onChangeText={text => setRegisterUsername(text)}
          style={styles.input}
        />
        <TextInput
          placeholder='Contraseña'
          value={registerPassword}
          onChangeText={text => setRegisterPassword(text)}
          secureTextEntry={true}
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={handleRegisterSubmit}>
          <ThemedText style={styles.buttonText}>Registrarse</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLoginRedirect}>
          <ThemedText style={styles.loginText}>Iniciar Sesión</ThemedText>
        </TouchableOpacity>
      </View>
    </ThemedView>
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
    },
    loginText: {
        fontWeight: 'bold'
    }
  });