import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#a8a5c4',
        padding: 8,
        flex: 1,
        alignItems: 'center',
    },
    titulo: {
        fontSize: RFPercentage(4),
        fontWeight: 'bold',
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 10,
        padding: 8,
        width: '100%',
        height: 80,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    texto: {
        fontSize: RFPercentage(2.5),
        color: '#0f0f0f',
        marginTop: 10,
    },
    anuncio: {
        marginTop: 20,
        alignItems: 'center',
        
    },
    imagem: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    nome: {
        fontSize: RFPercentage(2.5),
        fontWeight: 'bold',
    },
    valor: {
        fontSize: RFPercentage(2),
        color: '#ff0000',
    },
});

export default styles;