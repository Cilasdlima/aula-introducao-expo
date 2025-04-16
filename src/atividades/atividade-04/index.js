import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

function Atividade4() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [exibirTexto, setExibirTexto] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Atividade 4</Text>

      {/* Texto exibido ao clicar no botão */}
      {exibirTexto !== '' && (
        <Text style={styles.nomeCompleto}>{exibirTexto}</Text>
      )}

      <Text style={styles.subtitulo}>Inserir o nome e sobrenome</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        onChangeText={(valor) => setNome(valor)}
        value={nome}
      />

      <TextInput
        style={styles.input}
        placeholder="Sobrenome"
        onChangeText={(valor) => setSobrenome(valor)}
        value= {sobrenome}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={() => {
          setExibirTexto(`${nome} ${sobrenome}`); // Exibe o texto com o nome e sobrenome
          setNome(''); // Limpa o campo de nome
          setSobrenome('');
        } }> // Limpa os campos após exibir o texto        
      
        <Text style={styles.txtBotao}>Exibir texto</Text>
      </TouchableOpacity>
      

    </View>
  );
}

export default Atividade4;
