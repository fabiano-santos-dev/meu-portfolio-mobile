import { Ionicons } from '@expo/vector-icons';
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';

type RodapeProps = {
  onNavegar: (secao: string) => void;
};

export default function Rodape({ onNavegar }: RodapeProps) {
  const abrirLink = async (url: string) => {
    try {
      await Linking.openURL(url);
    } catch (error) {
      console.log('Erro ao abrir link:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>
        Meu<Text style={styles.logoDestaque}>Portfólio</Text>
      </Text>

      <Text style={styles.descricao}>
        Desenvolvedor Web em formação, criando projetos modernos, funcionais e
        responsivos.
      </Text>

      <View style={styles.redesSociais}>
        <Pressable
          onPress={() => abrirLink('https://github.com/fabiano-santos-dev')}
        >
          <Ionicons name='logo-github' size={26} color='#ffffff' />
        </Pressable>

        <Pressable
          onPress={() =>
            abrirLink(
              'https://www.linkedin.com/in/fabiano-fasnaweb-desenvolvedor/'
            )
          }
        >
          <Ionicons name='logo-linkedin' size={26} color='#ffffff' />
        </Pressable>
      </View>

      <Text style={styles.tituloLinks}>Links rápidos</Text>

      <View style={styles.links}>
        <Pressable onPress={() => onNavegar('inicio')}>
          <Text style={styles.link}>Início</Text>
        </Pressable>

        <Pressable onPress={() => onNavegar('sobre')}>
          <Text style={styles.link}>Sobre</Text>
        </Pressable>

        <Pressable onPress={() => onNavegar('skills')}>
          <Text style={styles.link}>Skills</Text>
        </Pressable>

        <Pressable onPress={() => onNavegar('projetos')}>
          <Text style={styles.link}>Projetos</Text>
        </Pressable>

        <Pressable onPress={() => onNavegar('contato')}>
          <Text style={styles.link}>Contato</Text>
        </Pressable>
      </View>

      <View style={styles.divisor} />

      <Text style={styles.copyright}>
        © 2026 Meu Portfólio. Todos os direitos reservados.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#171717',
    paddingHorizontal: 30,
    paddingVertical: 45,
    alignItems: 'center',
  },

  logo: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  logoDestaque: {
    color: '#3b82f6',
  },

  descricao: {
    color: '#a3a3a3',
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 25,
  },

  redesSociais: {
    flexDirection: 'row',
    gap: 22,
    marginBottom: 30,
  },

  tituloLinks: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  links: {
    alignItems: 'center',
    gap: 12,
  },

  link: {
    color: '#d4d4d4',
    fontSize: 15,
  },

  divisor: {
    width: '100%',
    height: 1,
    backgroundColor: '#262626',
    marginVertical: 30,
  },

  copyright: {
    color: '#737373',
    fontSize: 12,
    textAlign: 'center',
  },
});
