import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import styles from './styles';

function Atividade3() {
    const [num, setNum] = useState(0);

    function handleAtualizaState() {
        setNum(num + 1);
    }

    function handleDecrementaState() {
        setNum(num - 1);
    }

    function handleZerarState() {
        setNum(0);
    }

    const handleOutroJeitoFuncao = () => {
        Alert.alert('Título', 'Texto mensagem', [
            {
                text: 'Meu texto',
                onPress: () => Alert.alert('Tchau'),
                style: 'default',
            },
        ]);
    };

    return (
       
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 3</Text>
            


          
            <View style={styles.botoesContainer}>
                <TouchableOpacity style={styles.botao} onPress={handleAtualizaState}>
                    <Text style={styles.txtBotao}>Adicionar +1</Text>
                </TouchableOpacity>

                <Text style={styles.numero}>{num}</Text>

                <TouchableOpacity style={styles.botao} onPress={handleDecrementaState}>
                    <Text style={styles.txtBotao}>Subtrair -1</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.botao} onPress={handleZerarState}>
                <Text style={styles.txtBotao}>Zerar</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Atividade3;        