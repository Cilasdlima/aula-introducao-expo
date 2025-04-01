import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        padding: 20,
        flex: 1,
        alignItems: 'stretccenth',
        borderRadius: 20,
    
    },
    titulo: {
        fontSize: RFPercentage(3.5),
        color: '#161616',
        fontWeight: 'bold',
        borderColor: '#0b0c0c',
        borderRadius: 20,
        marginTop: 10,
        textAlign: 'center',
        marginBottom: 10,
        padding: 8,
        width: '100%',
        height: 80,
        textAlignVertical: 'center',
        textAlignVertical: 'center',
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
        resizeMode: 'contain',
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