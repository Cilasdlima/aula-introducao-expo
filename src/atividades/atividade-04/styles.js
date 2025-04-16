import { StyleSheet } from 'react-native'; 
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 30,
    flex: 1,
    alignItems: 'center',
  },
  titulo: {
    fontSize: RFPercentage(3),
    fontWeight: 'bold',
    color: '#0c789c',
    marginTop: 30,
    marginBottom: 40,
    textAlign: 'center',
  },
  nomeCompleto: {
    fontSize: RFPercentage(2.5),
    fontWeight: 'bold',
    color: 'deepskyblue',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: RFPercentage(2.1),
    fontWeight: '500',
    color: 'deepskyblue',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    width: '100%',
    fontSize: RFPercentage(2),
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    borderColor: 'deepskyblue',
    backgroundColor: '#cde2e9',
  },
  botao: {
    backgroundColor: 'deepskyblue',
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: RFPercentage(1.5),
    marginTop: 10,
  },
  txtBotao: {
    fontSize: RFPercentage(2),
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default styles;
