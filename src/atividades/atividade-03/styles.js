import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding:8,
        flex: 5,
        alignItems: 'center',  
        // justifyContent: 'center',
        borderRadius: 20,
        borderWidth: 10,
        borderColor: 'deepskyblue',
    },
    titulo: {
        fontSize: RFPercentage(3),
        color: 'deepskyblue',
        fontWeight: 'bold',
        borderWidth: 5,
        borderColor: 'deepskyblue',
        marginTop: 10,
        marginBottom: 20,
        padding: 8,
        width: '100%',
        height: 80,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 20,
    },
    texto: {
        fontSize: RFPercentage(2.2),
        color: '#333',
        marginBottom: 20,
    },
    botaoAlert: {
        width: '100%',
        margin: RFPercentage(1),
    },
    botoesContainer: {
        flexDirection: 'row',
        marginVertical: RFPercentage(1),
        justifyContent: 'space-evenly',
        width: '100%',
       
    },
    botao: {
        backgroundColor: 'deepskyblue',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        // flex: 1,
        marginHorizontal: 5,
        width: '50%',
        borderWidth: 1,
        
    },
    txtBotao: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    numero: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'black',
        // marginTop: 15,
        textAlign: 'center',
    },
});

export default styles;                 