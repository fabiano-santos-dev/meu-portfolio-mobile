import { useRef } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Cabecalho from '../componentes/Cabecalho';
import Contato from '../componentes/Contato';
import Footer from '../componentes/Footer';
import Home from '../componentes/Home';
import Projetos from '../componentes/Projetos';
import Skills from '../componentes/Skills';
import Sobre from '../componentes/Sobre';

export default function HomeScreen() {
  const scrollViewRef = useRef<ScrollView>(null);

  const secoes = useRef<Record<string, number>>({});

  const registrarSecao = (nome: string) => (event: any) => {
    secoes.current[nome] = event.nativeEvent.layout.y;
  };

  const navegar = (secao: string) => {
    const posicao = secoes.current[secao];

    if (posicao !== undefined) {
      scrollViewRef.current?.scrollTo({
        y: posicao,
        animated: true,
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Cabecalho onNavegar={navegar} />

      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.scrollConteudo}
      >
        <View onLayout={registrarSecao('inicio')}>
          <Home onNavegar={navegar} />
        </View>

        <View style={styles.sobreSecao} onLayout={registrarSecao('sobre')}>
          <Sobre />
        </View>

        <View onLayout={registrarSecao('skills')}>
          <Skills />
        </View>

        <View onLayout={registrarSecao('projetos')}>
          <Projetos />
        </View>

        <View onLayout={registrarSecao('contato')}>
          <Contato />
        </View>

        <Footer onNavegar={navegar} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020817',
  },

  scrollConteudo: {
    paddingTop: 30,
  },

  sobreSecao: {
    marginTop: 50,
  },
});
