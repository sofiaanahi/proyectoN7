import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


export default function LoginScreen({ navigation }: { navigation: any }) {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleLoginSubmit = () => {
    console.log('Validando inicio de sesión:', loginUsername, loginPassword);
    // Aquí iría la lógica de autenticación
  };

  const handleRegisterRedirect = () => {
    navigation.navigate('RegisterScreen');
  };

  return (
    <ThemedView>
      <View style={styles.inputContainer}>
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
        <TouchableOpacity style={styles.button} onPress={handleLoginSubmit}>
          <ThemedText style={styles.buttonText}>Iniciar Sesión</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRegisterRedirect}>
          <ThemedText style={styles.registerText}>Registrarse</ThemedText>
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
