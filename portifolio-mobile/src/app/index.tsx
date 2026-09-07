import { useRef } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';

import Cabecalho from '../componentes/Cabecalho';
import Home from '../componentes/Home';
import Sobre from '../componentes/Sobre';
import Skills from '../componentes/Skills';
import Projetos from '../componentes/Projetos';
import Contato from '../componentes/Contato';
import Footer from '../componentes/Footer';

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

        {/* HOME */}
        <View onLayout={registrarSecao('inicio')}>
          <Home />
        </View>

        {/* SOBRE */}
        <View
          style={styles.sobreSecao}
          onLayout={registrarSecao('sobre')}
        >
          <Sobre />
        </View>

        {/* SKILLS */}
        <View onLayout={registrarSecao('skills')}>
          <Skills />
        </View>

        {/* PROJETOS */}
        <View onLayout={registrarSecao('projetos')}>
          <Projetos />
        </View>

        {/* CONTATO */}
        <View onLayout={registrarSecao('contato')}>
          <Contato />
        </View>

        {/* FOOTER */}
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

  scrollConteudo: {
    paddingTop: 30,
  },

  sobreSecao: {
    marginTop: 50,
  },
});