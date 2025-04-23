// import React, { useState } from 'react';
// import { View,Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

// import styles from './styles';

// function Exemplo5 () {

//   const [n1, setN1] = useState(0);
//   const [n2, setN2] = useState(0);
//   const [total, setTotal] = useState(0);

//   function Soma() {
//     const conta = parseFloat(n1) + parseFloat(n2);
//     setTotal(conta.toString());
//   }


//   return (
//     <View style={styles.container}>
//       <Text style={styles.titulo}> Atividade 5 </Text>

//       <Text style={styles.txtSaida}> Calculadora básica </Text>

//       <Text style={styles.txtLabel}> 1º número</Text>
//       <TextInput 
//       style={styles.txtEntrada}
//       onChangeText={ (entrada) => setN1(entrada) }
//       value={n1.toString()}
//       /> 

//       <Text style={styles.txtSaida}> + </Text>

//       <Text style={styles.txtLabel}> 2º número</Text>
//       <TextInput 
//       style={styles.txtEntrada}
//       onChangeText={ (entrada) => setN2(entrada) }
//       value={n2.toString()}
//       /> 

//       <Text style={[styles.txtSaida, {margin: 0}]}> = </Text>

//       <Text style={styles.txtLabel}> Total </Text>
//       <TextInput 
//       style={styles.txtEntrada}
//       editable={false}
//       value={total}
//       />

//       <TouchableOpacity style={styles.button} onPress={() => Soma()}>
//         <Text style={styles.txtButton}> + </Text>
//       </TouchableOpacity>

//     </View>

//   );
// }


// export default Exemplo5;

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import styles from './styles';

function Atividade5() {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [total, setTotal] = useState(0);

  function Soma() {
    const conta = parseFloat(n1) + parseFloat(n2);
    setTotal(conta.toString());
  }

  function Subtrair() {
    const conta = parseFloat(n1) - parseFloat(n2);
    setTotal(conta.toString());
  }

  function Multiplicar() {
    const conta = parseFloat(n1) * parseFloat(n2);
    setTotal(conta.toString());
  }

  function Dividir() {
    if (parseFloat(n2) === 0) {
      setTotal('Erro');
    } else {
      const conta = parseFloat(n1) / parseFloat(n2);
      setTotal(conta.toString());
    }
  }

  function Limpar() {
    setN1('');
    setN2('');
    setTotal('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Atividade 5 </Text>
      <Text style={styles.txtSaida}> Calculadora básica </Text>

      <Text style={styles.txtLabel}> 1º número</Text>
      <TextInput
        style={styles.txtEntrada}
        keyboardType="numeric"
        onChangeText={entrada => setN1(entrada)}
        value={n1}
      />

      <Text style={styles.txtSaida}> + </Text>

      <Text style={styles.txtLabel}> 2º número</Text>
      <TextInput
        style={styles.txtEntrada}
        keyboardType="numeric"
        onChangeText={entrada => setN2(entrada)}
        value={n2}
      />

      <Text style={styles.txtSaida}> = </Text>

      <Text style={styles.txtLabel}> Total </Text>
      <TextInput
        style={styles.txtEntrada}
        editable={false}
        value={total}
      />

      {/* Botões das operações */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
        <TouchableOpacity style={styles.button} onPress={Soma}>
          <Text style={styles.txtButton}> + </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={Subtrair}>
          <Text style={styles.txtButton}> - </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={Multiplicar}>
          <Text style={styles.txtButton}> * </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={Dividir}>
          <Text style={styles.txtButton}> / </Text>
        </TouchableOpacity>
      </View>

      {/* Botão de limpar */}
      <TouchableOpacity style={styles.button1} onPress={Limpar}>
        <Text style={styles.txtButton}> Zerar </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Atividade5;
