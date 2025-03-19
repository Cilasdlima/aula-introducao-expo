import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

function Msg({ titulo, children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.texto}>{children}</Text>
            <View style={styles.anuncio}>
                <Image source={require('../../../assets/camisa-sao-paulo.jpg')} style={styles.imagem} />
                <Text style={styles.nome}>Camisa do São Paulo</Text>
                <Text style={styles.valor}>R$ 199,90</Text>
            </View>
            <View style={styles.anuncio}>
                <Image source={require('../../../assets/camisa-corinthians.jpg')} style={styles.imagem} />
                <Text style={styles.nome}>Camisa do Corinthians</Text>
                <Text style={styles.valor}>R$ 189,90</Text>
            </View>
            <View style={styles.anuncio}>
                <Image source={require('../../../assets/camisa-palmeiras.jpg')} style={styles.imagem} />
                <Text style={styles.nome}>Camisa do Palmeiras</Text>
                <Text style={styles.valor}>R$ 179,90</Text>
            </View>
            <View style={styles.anuncio}>
                <Image source={require('../../../assets/camisa-santos.jpg')} style={styles.imagem} />
                <Text style={styles.nome}>Camisa do Santos</Text>
                <Text style={styles.valor}>R$ 169,90</Text>
            </View>
        </View>
    );
}

export default Msg;