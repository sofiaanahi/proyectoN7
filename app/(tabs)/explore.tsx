import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Registrarse</ThemedText>
      </ThemedView>
      <ThemedText> ¡Bienvindo a listasTarea, podras organizarte como vos quieras!</ThemedText>
      <Collapsible title="Lista de Tareas">
      </Collapsible> 
      <Collapsible title="Agregar Tarea">
      </Collapsible>
      <Collapsible title="Editar Tarea">
      </Collapsible>
      <Collapsible title="Ver Tarea">
      </Collapsible>
      <Collapsible title="configuracion de la aplicacion">
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#',
    bottom: -50,
    left: 0,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
