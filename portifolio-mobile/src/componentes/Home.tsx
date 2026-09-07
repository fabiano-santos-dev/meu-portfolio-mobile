import { Ionicons } from '@expo/vector-icons';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.conteudo}>
      <Image source={require('../../assets/fs1.png')} style={styles.foto} />

      <Text style={styles.introducao}>Olá, eu sou</Text>

      <Text style={styles.nome}>
        Fabiano <Text style={styles.nomeDestaque}>Alves</Text>
      </Text>

      <Text style={styles.profissao}>Desenvolvedor Web</Text>

      <Text style={styles.descricao}>
        Sou estudante de Análise e Desenvolvimento de Sistemas e estou
        construindo minha experiência através de projetos modernos, funcionais e
        responsivos.
      </Text>

      <View style={styles.botoes}>
        <Pressable style={styles.botaoProjetos}>
          <Text style={styles.textoBotaoProjetos}>Meus projetos →</Text>
        </Pressable>

        <Pressable style={styles.botaoCurriculo}>
          <Text style={styles.textoBotaoCurriculo}>Ver currículo ↓</Text>
        </Pressable>
      </View>

      <View style={styles.redesSociais}>
        <Pressable>
          <Ionicons name='logo-github' size={28} color='#ffffff' />
        </Pressable>

        <Pressable>
          <Ionicons name='logo-linkedin' size={28} color='#ffffff' />
        </Pressable>

        <Pressable>
          <Ionicons name='mail-outline' size={28} color='#ffffff' />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conteudo: {
    paddingHorizontal: 30,
    paddingVertical: 30,
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
});
