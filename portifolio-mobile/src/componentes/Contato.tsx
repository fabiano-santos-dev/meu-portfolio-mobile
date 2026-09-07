import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function Contato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const [enviando, setEnviando] = useState(false);

  const enviarMensagem = async () => {
    if (!nome.trim() || !email.trim() || !mensagem.trim()) {
      Alert.alert('Campos obrigatórios', 'Preencha nome, e-mail e mensagem.');
      return;
    }

    setEnviando(true);

    try {
      const resposta = await fetch('https://formspree.io/f/xyeydenr', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: nome,
          email: email,
          message: mensagem,
        }),
      });

      const resultado = await resposta.json();

      if (resposta.ok) {
        Alert.alert(
          'Mensagem enviada!',
          'Obrigado pelo contato. Sua mensagem foi enviada com sucesso.'
        );

        setNome('');
        setEmail('');
        setMensagem('');
      } else {
        console.log('Erro Formspree:', resultado);

        Alert.alert(
          'Erro',
          'Não foi possível enviar a mensagem. Tente novamente.'
        );
      }
    } catch (error) {
      console.log('Erro ao enviar:', error);

      Alert.alert(
        'Erro',
        'Não foi possível enviar a mensagem. Verifique sua conexão.'
      );
    } finally {
      setEnviando(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tituloPequeno}>ENTRE EM CONTATO</Text>

      <Text style={styles.titulo}>Vamos conversar?</Text>

      <Text style={styles.subtitulo}>
        Tem um projeto em mente ou quer trocar uma ideia? Entre em contato
        comigo.
      </Text>

      <View style={styles.informacoes}>
        <View style={styles.informacao}>
          <Ionicons name='mail-outline' size={26} color='#3b82f6' />

          <View>
            <Text style={styles.label}>Email</Text>

            <Text style={styles.valor}>fasnaweb2020@gmail.com</Text>
          </View>
        </View>

        <View style={styles.informacao}>
          <Ionicons name='location-outline' size={26} color='#3b82f6' />

          <View>
            <Text style={styles.label}>Localização</Text>

            <Text style={styles.valor}>Brasil, Itajubá - Minas Gerais</Text>
          </View>
        </View>

        <View style={styles.informacao}>
          <Ionicons name='briefcase-outline' size={26} color='#3b82f6' />

          <View>
            <Text style={styles.label}>Disponibilidade</Text>

            <Text style={styles.valor}>Aberto a novos projetos</Text>
          </View>
        </View>
      </View>

      <View style={styles.formulario}>
        <Text style={styles.labelCampo}>Nome</Text>

        <TextInput
          style={styles.input}
          placeholder='Seu nome'
          placeholderTextColor='#94a3b8'
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.labelCampo}>Email</Text>

        <TextInput
          style={styles.input}
          placeholder='seu@email.com'
          placeholderTextColor='#94a3b8'
          keyboardType='email-address'
          autoCapitalize='none'
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.labelCampo}>Mensagem</Text>

        <TextInput
          style={[styles.input, styles.textarea]}
          placeholder='Digite sua mensagem...'
          placeholderTextColor='#94a3b8'
          multiline
          textAlignVertical='top'
          value={mensagem}
          onChangeText={setMensagem}
        />

        <Pressable
          style={[styles.botao, enviando && styles.botaoDesativado]}
          onPress={enviarMensagem}
          disabled={enviando}
        >
          {enviando ? (
            <ActivityIndicator color='#ffffff' />
          ) : (
            <Text style={styles.textoBotao}>Enviar mensagem</Text>
          )}
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 30,
    paddingVertical: 50,
  },

  tituloPequeno: {
    color: '#3b82f6',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  titulo: {
    color: '#171717',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  subtitulo: {
    color: '#525252',
    fontSize: 16,
    lineHeight: 25,
    marginBottom: 35,
  },

  informacoes: {
    gap: 25,
    marginBottom: 40,
  },

  informacao: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },

  label: {
    color: '#171717',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },

  valor: {
    color: '#525252',
    fontSize: 14,
  },

  formulario: {
    marginTop: 10,
  },

  labelCampo: {
    color: '#171717',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 7,
    paddingHorizontal: 14,
    paddingVertical: 13,
    fontSize: 15,
    color: '#171717',
    marginBottom: 20,
  },

  textarea: {
    height: 130,
    paddingTop: 13,
  },

  botao: {
    backgroundColor: '#3b82f6',
    paddingVertical: 15,
    borderRadius: 7,
    alignItems: 'center',
  },

  botaoDesativado: {
    opacity: 0.7,
  },

  textoBotao: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
