import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <View>
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
          <Text style={styles.itemMenu}>Início</Text>
          <Text style={styles.itemMenu}>Sobre</Text>
          <Text style={styles.itemMenu}>Skills</Text>
          <Text style={styles.itemMenu}>Projetos</Text>
          <Text style={styles.itemMenu}>Contato</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
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