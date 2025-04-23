import React, { useState } from 'react';
import { View,Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import styles from './styles';

function Exemplo5 () {

  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [total, setTotal] = useState(0);

  function Soma() {
    const conta = parseFloat(n1) + parseFloat(n2);
    setTotal(conta.toString());
  }


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Exemplo 5 </Text>

      <Text style={styles.txtSaida}> Calculadora básica </Text>

      <Text style={styles.txtLabel}> 1º número</Text>
      <TextInput 
      style={styles.txtEntrada}
      onChangeText={ (entrada) => setN1(entrada) }
      value={n1.toString()}
      /> 

      <Text style={styles.txtSaida}> + </Text>

      <Text style={styles.txtLabel}> 2º número</Text>
      <TextInput 
      style={styles.txtEntrada}
      onChangeText={ (entrada) => setN2(entrada) }
      value={n2.toString()}
      /> 

      <Text style={[styles.txtSaida, {margin: 0}]}> = </Text>

      <Text style={styles.txtLabel}> Total </Text>
      <TextInput 
      style={styles.txtEntrada}
      editable={false}
      value={total}
      />

      <TouchableOpacity style={styles.button} onPress={() => Soma()}>
        <Text style={styles.txtButton}> + </Text>
      </TouchableOpacity>

    </View>

  );
}


export default Exemplo5;