import { Ionicons } from '@expo/vector-icons';
import { Asset } from 'expo-asset';
import * as Sharing from 'expo-sharing';
import { useState } from 'react';
import {
  Alert,
  Image,
  Linking,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type HomeProps = {
  onNavegar?: (secao: string) => void;
};

export default function Home({ onNavegar }: HomeProps) {
  const [curriculoAberto, setCurriculoAberto] = useState(false);
  const abrirLink = async (url: string) => {
    try {
      await Linking.openURL(url);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível abrir este link.');
    }
  };
  const baixarCurriculo = async () => {
    try {
      const arquivo = Asset.fromModule(require('../../assets/curriculo.pdf'));

      await arquivo.downloadAsync();

      if (arquivo.localUri && (await Sharing.isAvailableAsync())) {
        await Sharing.shareAsync(arquivo.localUri, {
          mimeType: 'application/pdf',
          dialogTitle: 'Baixar currículo',
        });
      } else {
        Alert.alert(
          'Aviso',
          'O compartilhamento não está disponível neste aparelho.'
        );
      }
    } catch (error) {
      console.log('Erro ao abrir currículo:', error);

      Alert.alert('Erro', 'Não foi possível abrir o currículo.');
    }
  };

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
        <Pressable
          style={styles.botaoProjetos}
          onPress={() => onNavegar?.('projetos')}
        >
          <Text style={styles.textoBotaoProjetos}>Meus projetos →</Text>
        </Pressable>

        <Pressable
          style={styles.botaoCurriculo}
          onPress={() => setCurriculoAberto(true)}
        >
          <Text style={styles.textoBotaoCurriculo}>Ver currículo ↓</Text>
        </Pressable>
      </View>

      <View style={styles.redesSociais}>
        <Pressable
          onPress={() => abrirLink('https://github.com/fabiano-santos-dev')}
        >
          <Ionicons name='logo-github' size={28} color='#ffffff' />
        </Pressable>

        <Pressable
          onPress={() =>
            abrirLink('https://www.linkedin.com/in/fabiano-fasnaweb-desenvolvedor/')}
        >
          <Ionicons name='logo-linkedin' size={28} color='#ffffff' />
        </Pressable>

        <Pressable onPress={() => abrirLink('mailto:fasnaweb2020@gmail.com')}>
          <Ionicons name='mail-outline' size={28} color='#ffffff' />
        </Pressable>
      </View>

      {/* JANELA DO CURRÍCULO */}

      <Modal
        visible={curriculoAberto}
        transparent
        animationType='fade'
        onRequestClose={() => setCurriculoAberto(false)}
      >
        <View style={styles.fundoModal}>
          <View style={styles.modalCurriculo}>
            {/* FECHAR */}

            <Pressable
              style={styles.botaoFechar}
              onPress={() => setCurriculoAberto(false)}
            >
              <Ionicons name='close' size={30} color='#111111' />
            </Pressable>

            {/* PREVIEW */}

            <Image
              source={require('../../assets/curriculo-preview.png')}
              style={styles.previewCurriculo}
              resizeMode='contain'
            />

            {/* COMPARTILHAR / BAIXAR */}

            <Pressable style={styles.botaoBaixar} onPress={baixarCurriculo}>
              <Text style={styles.textoBotaoBaixar}>Baixar currículo</Text>

              <Ionicons name='download-outline' size={22} color='#ffffff' />
            </Pressable>
          </View>
        </View>
      </Modal>
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

  /* MODAL */

  fundoModal: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },

  modalCurriculo: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
  },

  botaoFechar: {
    alignSelf: 'flex-end',
    padding: 5,
    marginBottom: 5,
  },

  previewCurriculo: {
    width: '100%',
    height: 500,
  },

  botaoBaixar: {
    marginTop: 15,
    backgroundColor: '#3b82f6',
    paddingVertical: 13,
    paddingHorizontal: 22,
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  textoBotaoBaixar: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
