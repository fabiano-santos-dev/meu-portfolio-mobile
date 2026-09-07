import { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';

type CabecalhoProps = {
  onNavegar: (secao: string) => void;
};

export default function Cabecalho({ onNavegar }: CabecalhoProps) {
  const [menuAberto, setMenuAberto] = useState(false);

  const navegar = (secao: string) => {
    setMenuAberto(false);
    onNavegar(secao);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#171717"
      />

      <View style={styles.header}>
        <Text style={styles.logo}>
          Meu<Text style={styles.logoDestaque}>Portfólio</Text>
        </Text>

        <Pressable
          onPress={() => setMenuAberto(!menuAberto)}
          style={styles.botaoMenu}
        >
          <Text style={styles.menu}>
            {menuAberto ? '✕' : '☰'}
          </Text>
        </Pressable>
      </View>

      {menuAberto && (
        <View style={styles.menuAberto}>

          <Pressable onPress={() => navegar('inicio')}>
            <Text style={styles.itemMenu}>Início</Text>
          </Pressable>

          <Pressable onPress={() => navegar('sobre')}>
            <Text style={styles.itemMenu}>Sobre</Text>
          </Pressable>

          <Pressable onPress={() => navegar('skills')}>
            <Text style={styles.itemMenu}>Skills</Text>
          </Pressable>

          <Pressable onPress={() => navegar('projetos')}>
            <Text style={styles.itemMenu}>Projetos</Text>
          </Pressable>

          <Pressable onPress={() => navegar('contato')}>
            <Text style={styles.itemMenu}>Contato</Text>
          </Pressable>

        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#171717',
    paddingTop: 30,
  },

  header: {
    width: '100%',
    height: 70,
    backgroundColor: '#171717',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#262626',
  },

  logo: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },

  logoDestaque: {
    color: '#3b82f6',
  },

  botaoMenu: {
    padding: 8,
  },

  menu: {
    color: '#ffffff',
    fontSize: 28,
  },

  menuAberto: {
    backgroundColor: '#171717',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#262626',
  },

  itemMenu: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '500',
    paddingVertical: 14,
  },
});