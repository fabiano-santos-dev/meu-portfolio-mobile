import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Cabecalho from '../componentes/Cabecalho';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Cabecalho />

      <View style={styles.conteudo}>
        <Text style={styles.introducao}>Olá, eu sou</Text>

        <Text style={styles.nome}>
          Fabiano <Text style={styles.nomeDestaque}>Alves</Text>
        </Text>

        <Text style={styles.profissao}>Desenvolvedor Web</Text>

        <Text style={styles.descricao}>
          Sou estudante de Análise e Desenvolvimento de Sistemas e estou
          construindo minha experiência através de projetos modernos, funcionais
          e responsivos.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020817',
  },

  conteudo: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
  },

  introducao: {
    color: '#3b82f6',
    fontSize: 24,
    marginBottom: 8,
  },

  nome: {
    color: '#ffffff',
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  nomeDestaque: {
    color: '#3b82f6',
  },

  profissao: {
    color: '#8b5cf6',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  descricao: {
    color: '#dbeafe',
    fontSize: 16,
    lineHeight: 26,
  },
});
