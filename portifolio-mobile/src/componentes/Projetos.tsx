import {
  Image,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function Projetos() {
  const abrirProjeto = async (url: string) => {
    try {
      await Linking.openURL(url);
    } catch (error) {
      console.log('Erro ao abrir projeto:', error);
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.tituloPequeno}>
        MEUS PROJETOS
      </Text>

      <Text style={styles.titulo}>
        Projetos em destaque
      </Text>

      {/* PROJETO CONSTRULINK */}

      <View style={styles.card}>

        <Image
          source={require('../../assets/construlink_home.png')}
          style={styles.imagemProjeto}
        />

        <View style={styles.conteudoCard}>

          <Text style={styles.nomeProjeto}>
            <Text style={styles.nomeDestaque}>
              Construlink
            </Text>
            {' - '}
            Conectando clientes aos profissionais certos para cada serviço.
          </Text>

          <Text style={styles.descricao}>
            O Construlink é uma plataforma desenvolvida para conectar clientes
            a profissionais das áreas de construção, manutenção e reformas. A
            aplicação permite que clientes encontrem profissionais por
            especialidade ou região, visualizem seus perfis, acompanhem
            avaliações e solicitem contato para serviços.
          </Text>

          <View style={styles.tecnologias}>

            <View style={styles.tag}>
              <Text style={styles.textoTag}>
                HTML
              </Text>
            </View>

            <View style={styles.tag}>
              <Text style={styles.textoTag}>
                CSS
              </Text>
            </View>

            <View style={styles.tag}>
              <Text style={styles.textoTag}>
                JAVASCRIPT
              </Text>
            </View>

            <View style={styles.tag}>
              <Text style={styles.textoTag}>
                REACT
              </Text>
            </View>

          </View>

          <Pressable
            style={styles.botao}
            onPress={() =>
              abrirProjeto(
                'https://github.com/NatanSamuel52/Contrulink'
              )
            }
          >
            <Text style={styles.textoBotao}>
              Ver projeto
            </Text>
          </Pressable>

        </View>
      </View>

      {/* PROJETO PORTFÓLIO */}

      <View style={styles.card}>

        <Image
          source={require('../../assets/projeto_portifolio.png')}
          style={styles.imagemProjeto}
        />

        <View style={styles.conteudoCard}>

          <Text style={styles.nomeProjeto}>
            <Text style={styles.nomeDestaque}>
              Meu Portfólio
            </Text>
          </Text>

          <Text style={styles.descricao}>
            Portfólio pessoal desenvolvido com Html, CSS, JavaScript, React,
            Git e Git-Hub.
          </Text>

          <View style={styles.tecnologias}>

            <View style={styles.tag}>
              <Text style={styles.textoTag}>
                REACT
              </Text>
            </View>

            <View style={styles.tag}>
              <Text style={styles.textoTag}>
                JAVASCRIPT
              </Text>
            </View>

            <View style={styles.tag}>
              <Text style={styles.textoTag}>
                CSS
              </Text>
            </View>

          </View>

          <Pressable
            style={styles.botao}
            onPress={() =>
              abrirProjeto(
                'https://github.com/fabiano-santos-dev/meu-portfolio-react'
              )
            }
          >
            <Text style={styles.textoBotao}>
              Ver projeto
            </Text>
          </Pressable>

        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    paddingVertical: 50,
  },

  tituloPequeno: {
    color: '#2563eb',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },

  titulo: {
    color: '#171717',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 45,
  },

  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    overflow: 'hidden',
    marginBottom: 30,
  },

  imagemProjeto: {
    width: '100%',
    height: 220,
    resizeMode: 'contain',
    backgroundColor: '#171717',
  },

  conteudoCard: {
    padding: 25,
  },

  nomeProjeto: {
    color: '#171717',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 27,
    marginBottom: 12,
  },

  nomeDestaque: {
    color: '#2563eb',
  },

  descricao: {
    color: '#171717',
    fontSize: 16,
    lineHeight: 20,
    marginBottom: 18,
  },

  tecnologias: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 20,
  },

  tag: {
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 11,
    paddingVertical: 7,
    borderRadius: 6,
  },

  textoTag: {
    color: '#334155',
    fontSize: 13,
    fontWeight: '500',
  },

  botao: {
    alignSelf: 'flex-start',
    backgroundColor: '#2563eb',
    paddingHorizontal: 18,
    paddingVertical: 11,
    borderRadius: 6,
  },

  textoBotao: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});