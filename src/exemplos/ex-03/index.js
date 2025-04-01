import { View,Text, Button } from 'react-native';

import styles from './styles';

function Exemplo3 () {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exemplo 3</Text>
      <Text style={styles.texto}>Aula de react-native com expo</Text>
      <Button
        onPress={() => {}}
        title='Alerta'
        color={'deepskyblue'}
        accessibilityLabel='Clique para exibir um alerta'
       />
       
    </View>
  );
}

export default Exemplo3;