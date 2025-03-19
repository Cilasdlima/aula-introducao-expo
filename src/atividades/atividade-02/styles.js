import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        padding: 8,
        flex: 1,
        alignItems: 'center',
        
    
        
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
        color: '#141313',
    },
});

export default styles;