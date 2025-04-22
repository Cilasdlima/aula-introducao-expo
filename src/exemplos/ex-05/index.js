import React, { useState } from 'react';
import { View,Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import styles from './styles';

function Exemplo5 () {


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Exemplo 5 </Text>

      <Text style={styles.txtSaida}> Calculadora básica </Text>

      <Text style={styles.textlabel}> 1º número</Text>
      <TextInput style={styles.txtEntrada} /> 

      <Text style={styles.txtSaida}> + </Text>

      <Text style={styles.textlabel}> 2º número</Text>
      <TextInput style={styles.txtEntrada} /> 

      <Text style={[styles.txtSaida, {margin: 0}]}> = </Text>

      <Text style={styles.textLabel}> Total </Text>
      <TextInput style={styles.txtEntrada} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}> + </Text>
      </TouchableOpacity>

    </View>

  );
}


export default Exemplo5;