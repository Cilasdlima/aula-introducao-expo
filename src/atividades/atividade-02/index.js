import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const Atividade2 = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>São Paulo Store</Text>
            <View style={styles.anuncio}>
                <Image source={require('../../../assets/camisa.png')} style={styles.imagem} />
                <Text style={styles.nome}>Camisa 01 do São Paulo</Text>
                <Text style={styles.valor}>R$ 350,00</Text>
            </View>
            <View style={styles.anuncio}>
                <Image source={require('../../../assets/camisa1.png')} style={styles.imagem} />
                <Text style={styles.nome}>Camisa 02 do São Paulo</Text>
                <Text style={styles.valor}>R$ 300,00</Text>
            </View>
            <View style={styles.anuncio}>
                <Image source={require('../../../assets/camisa2.png')} style={styles.imagem} />
                <Text style={styles.nome}>Camisa 03 do São Paulo</Text>
                <Text style={styles.valor}>R$ 290,00</Text>
            </View>
            <View style={styles.anuncio}>
                <Image source={require('../../../assets/camisa3.png')} style={styles.imagem} />
                <Text style={styles.nome}>Camisa 04 do São Paulo</Text>
                <Text style={styles.valor}>R$ 350,00</Text>
            </View>
        </View>
    );
};

export default Atividade2;