import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 8,
        flex: 1,

    },
    titulo: {
        fontSize: RFPercentage(3),
        fontWeight: 'bold',
        borderWidth: 2,
        borderColor: '#E91E63',
        marginTop: 10,
        marginBottom: 10,
        padding: 8,
        width: '100%',
        height: 80,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    texto: {
        fontSize: RFPercentage(2.2),
        color: 'deepskyblue',
    },

    txtSaida: {
        fontSize: 22,
        margin: 6,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#E91E63',
    },
    txtEntrada: {
        borderWidth: 4,
        textAlign: 'center',
        fontSize: 22,
        borderColor: '#E91E63',
        height: 60,
        color: '#080808',
        borderRadius: 10,
        marginTop: 10,
    },
   button: {
    backgroundColor: '#E91E63',
    height: 40,
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 10,
   },
   txtButton: {
    fontSize: 22,
    color: '#0c0c0c',
    textAlign: 'center',
   },
   txtLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#080808',
   },

});

export default styles;

