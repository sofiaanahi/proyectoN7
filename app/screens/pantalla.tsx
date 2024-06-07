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
    headerBackgroundColor={{ light: '#80B315', dark: '#1D3D47' }}
      headerImage={<Image
                  source={require('@/assets/images/vector.jpg')}
                  style={styles.reactLogo}
                />}>
      <ThemedView style={styles.titleContainer}>
      <ThemedText> ¡Bienvindo a listasTarea, podras organizarte como vos quieras!</ThemedText>
      {/* <Collapsible title="Lista de Tareas">
      </Collapsible> 
      <Collapsible title="Agregar Tarea">
      </Collapsible>
      <Collapsible title="Editar Tarea">
      </Collapsible>
      <Collapsible title="Ver Tarea">
      </Collapsible>
      <Collapsible title="configuracion de la aplicacion">
      </Collapsible> */}
      </ThemedView>
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
    reactLogo:{
    height: 180,
    width: 360,
    bottom: 0,
    left: 0,
    alignContent: 'center',
    top: 22,
    alignSelf: 'center',
    borderRadius: 7,
    }
    
  });
  