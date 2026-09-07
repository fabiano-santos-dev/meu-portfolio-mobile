import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Cabecalho from '../componentes/Cabecalho';
import Contato from '../componentes/Contato';
import Footer from '../componentes/Footer';
import Home from '../componentes/Home';
import Projetos from '../componentes/Projetos';
import Skills from '../componentes/Skills';
import Sobre from '../componentes/Sobre';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Cabecalho />
      <ScrollView style={styles.scrollConteudo}>
        <Home />
        <Sobre />
        <Skills />
        <Projetos />
        <Contato />
        <Footer />
      </ScrollView>
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
  foto: {
    width: 230,
    height: 230,
    borderRadius: 10,
    marginBottom: 30,
    alignSelf: 'center',
  },
  botoes: {
    flexDirection: 'row',
    gap: 14,
    marginTop: 30,
  },

  botaoProjetos: {
    backgroundColor: '#3b82f6',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 7,
  },

  textoBotaoProjetos: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },

  botaoCurriculo: {
    borderWidth: 1,
    borderColor: '#94a3b8',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 7,
  },

  textoBotaoCurriculo: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  redesSociais: {
    flexDirection: 'row',
    gap: 22,
    marginTop: 25,
  },
  scrollConteudo: {
    paddingTop: 30,
  },
  sobreSecao: {
    marginTop: 50,
  },
});
