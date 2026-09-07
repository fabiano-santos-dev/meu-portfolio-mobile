import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

export default function Skills() {
  return (
    <View style={styles.container}>
      <Text style={styles.tituloPequeno}>MINHAS HABILIDADES</Text>

      <Text style={styles.titulo}>Tecnologias que utilizo</Text>

      <View style={styles.cards}>
        <View style={styles.card}>
          <Ionicons name="logo-html5" size={40} color="#e34f26" />
          <Text style={styles.nomeTecnologia}>HTML5</Text>
        </View>

        <View style={styles.card}>
          <Ionicons name="logo-css3" size={40} color="#1572b6" />
          <Text style={styles.nomeTecnologia}>CSS3</Text>
        </View>

        <View style={styles.card}>
          <Ionicons name="logo-javascript" size={40} color="#f7df1e" />
          <Text style={styles.nomeTecnologia}>JavaScript</Text>
        </View>

        <View style={styles.card}>
          <Ionicons name="logo-react" size={40} color="#61dafb" />
          <Text style={styles.nomeTecnologia}>React</Text>
        </View>

        <View style={styles.card}>
          <Ionicons name="git-branch-outline" size={40} color="#f05032" />
          <Text style={styles.nomeTecnologia}>Git</Text>
        </View>

        <View style={styles.card}>
          <Ionicons name="logo-github" size={40} color="#171717" />
          <Text style={styles.nomeTecnologia}>GitHub</Text>
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
    marginBottom: 30,
  },

  cards: {
    gap: 15,
  },

  card: {
    backgroundColor: '#f8fafc',
    padding: 25,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    alignItems: 'center',
  },

  nomeTecnologia: {
    color: '#171717',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 12,
  },
});