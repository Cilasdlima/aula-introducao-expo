// import { useState } from 'react';

// import { View,Text, TextInput, TouchableOpacity } from 'react-native';

// import styles from './styles';

// function Exemplo4 () {

//     const [txtInserido, setTxtInserido] = useState('');
//     const [txtExibir, setTxtExibir] = useState('');
//   return (
//     <View style={styles.container}>
//       <Text style={styles.titulo}>Atividade 4</Text>

//       <Text style={styles.texto}>{txtInserido}</Text>
//       <TextInput 
//         style={styles.input}
//         onChangeText={(valor) => setTxtInserido(valor)}
//       />

//       <Text style={styles.titulo}>
//         Exemplo envio dados click do botão
//       </Text>
//       < Text style={styles.texto}>{txtExibir}</Text>
//       <TouchableOpacity 
//         style={styles.botao}
//         onPress={() => setTxtExibir(txtInserido)}
//         >

//         <Text style={styles.txtBotao}>
//            Exibir texto digitado
//         </Text>
//       </TouchableOpacity>

//     </View>
//   );
// }

// export default Exemplo4;









import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

function Exemplo4() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [exibirTexto, setExibirTexto] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Atividade 4</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        onChangeText={(valor) => setNome(valor)}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite seu sobrenome"
        onChangeText={(valor) => setSobrenome(valor)}
      />

      {/* <Text style={styles.titulo}>Exemplo envio dados click do botão</Text> */}
      <Text style={styles.texto}>{exibirTexto}</Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => setExibirTexto(`${nome}\n${sobrenome}`)}
      >
        <Text style={styles.txtBotao}>Exibir texto digitado</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Exemplo4;