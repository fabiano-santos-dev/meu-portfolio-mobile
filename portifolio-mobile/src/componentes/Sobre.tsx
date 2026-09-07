import { Ionicons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/fs2.png')} style={styles.foto} />

      <Text style={styles.tituloPequeno}>SOBRE MIM</Text>

      <Text style={styles.titulo}>Um pouco sobre mim</Text>

      <Text style={styles.texto}>
        Sou estudante de Análise e Desenvolvimento de Sistemas e estou sempre em
        busca de novos conhecimentos. Gosto de transformar ideias em projetos
        reais e funcionais.
      </Text>
      <Text style={styles.texto}>
        Atualmente estou focado em aprender cada vez mais sobre React,
        JavaScript, Git e Git-Hub, Desenvolvimento React Native e boas práticas
        de desenvolvimento.
      </Text>

      <View style={styles.cards}>
        <View style={styles.card}>
          <Ionicons name='locate-outline' size={30} color='#3b82f6' />
          <Text style={styles.cardTitulo}>Focado</Text>
        </View>

        <View style={styles.card}>
          <Ionicons name='checkmark-circle-outline' size={30} color='#3b82f6' />
          <Text style={styles.cardTitulo}>Dedicado</Text>
        </View>

        <View style={styles.card}>
          <Ionicons name='bulb-outline' size={30} color='#3b82f6' />
          <Text style={styles.cardTitulo}>Criativo</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 30,
    paddingVertical: 50,
  },

  foto: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 35,
    alignSelf: 'center',
  },

  tituloPequeno: {
    color: '#3b82f6',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  titulo: {
    color: '#171717',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  texto: {
    color: '#525252',
    fontSize: 16,
    lineHeight: 26,
    marginBottom: 20,
  },

  cards: {
    marginTop: 30,
    gap: 15,
  },

  card: {
    backgroundColor: '#f8fafc',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    alignItems: 'center',
  },

  cardTitulo: {
    color: '#171717',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
