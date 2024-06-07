import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function LoginScreen({ navigation }: { navigation: any }) {
  
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  navigation.navigate('pantallaa')
 

  const isValidUsernameOrEmail = (input: string) => {
    const usernameRegex = /^[a-zA-Z0-9]{5,10}$/;
    return usernameRegex.test(input) ;
  };

  const isValidPassword = (password: string) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{5,}$/;
    return passwordRegex.test(password);
  };

  const handleLoginSubmit = () => {

    if (!isValidUsernameOrEmail(loginUsername)) {
      Alert.alert('Error', 'El nombre de usuario debe tener entre 5 y 10 caracteres.');
   
    }
    if (!isValidPassword(loginPassword)) {
      Alert.alert('Error', 'La contraseña debe tener al menos 5 caracteres, una letra mayúscula, una letra minúscula y un símbolo.');
      return;
    }

 
    

    console.log('Validando inicio de sesión:', loginUsername, loginPassword);
  };



  return (
    <ThemedView>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Nombre de usuario o email'
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
        <TouchableOpacity style={styles.button} onPress={handleLoginSubmit}>
          
          <ThemedText style={styles.buttonText}>Iniciar Sesión</ThemedText>
        </TouchableOpacity>
       
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 20,
    paddingHorizontal: 30,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#80B315',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  registerText: {
    color: '#80B315',
    fontSize: 18,
    textAlign: 'center',
  },
});
