import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        padding: 20,
        flex: 5,
        alignItems: 'stretch',
    
    },
    titulo: {
        fontSize: RFPercentage(3.5),
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    anuncio: {
        marginTop: 10,
        alignItems: 'center',
        borderWidth: 3, 
        borderColor: '#000000', 
        padding: 5, 
    //     elevation: 5,
    //    shadowOpacity: 0.5,
    },
    imagem: {
        width: 100,
        height: 100,
        marginBottom: 1,
    },
    nome: {
        fontSize: RFPercentage(2.5),
        fontWeight: 'bold',
        marginBottom: 1,
    },
    valor: {
        fontSize: RFPercentage(2),
        color: '#ff4800',
    },
});

export default styles;