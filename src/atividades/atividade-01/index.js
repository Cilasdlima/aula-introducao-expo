import { View,Text } from 'react-native';

import styles from './styles';

function Atividade1 () {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Atividade 1</Text>
      <Text style={styles.texto}>Aula de react-native com expo</Text>
      <Text style={styles.texto}>Eu tinha um amigo que não conseguia focar na linha 03, fizemos de tudo mais nada adiantava. então o quertido prof não aguentou e bateu com a cabeça dele contra o teclado!</Text>
    </View>
  );
}

export default Atividade1;