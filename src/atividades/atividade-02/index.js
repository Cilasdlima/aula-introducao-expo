import React from 'react'; // Importação do React
import { View, Text } from 'react-native'; // Importação dos componentes do React Native
import styles from './styles'; // Importação do arquivo de estilos
import Card from '../../atividades/atividade-02/card/'; // Importação do componente Card

// Importação das imagens
import img1 from '../../../assets/camisa.png';
import img2 from '../../../assets/camisa1.png';
import img3 from '../../../assets/camisa2.png';
import img4 from '../../../assets/camisa3.png';



function Atividade2() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 2</Text>
            <Card titulo="Camisa Tricolor" img={img1} valor="350,00">
                Camisa São Paulo, modelo 2021.
            </Card>
            <Card titulo="Camisa Tricolor" img={img2} valor="380,00">
                Camisa São Paulo, modelo 2020.
            </Card>
            <Card titulo="Camisa Tricolor" img={img3} valor="280,00">
                Camisa São Paulo, modelo 2019.
            </Card>
            <Card titulo="Camisa Tricolor" img={img4} valor="550,00">
                Camisa São Paulo, modelo 2018.
            </Card>
        </View>
    );
}

export default Atividade2;






// import React from 'react';
// import { View, Text, Image } from 'react-native';
// import styles from './styles';

// const Atividade2 = () => {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.titulo}>São Paulo Store</Text>
//             <View style={styles.anuncio}>
//                 <Image source={require('../../../assets/camisa.png')} style={styles.imagem} />
//                 <Text style={styles.nome}>Camisa 01 do São Paulo</Text>
//                 <Text style={styles.valor}>R$ 350,00</Text>
//             </View>
//             <View style={styles.anuncio}>
//                 <Image source={require('../../../assets/camisa1.png')} style={styles.imagem} />
//                 <Text style={styles.nome}>Camisa 02 do São Paulo</Text>
//                 <Text style={styles.valor}>R$ 300,00</Text>
//             </View>
//             <View style={styles.anuncio}>
//                 <Image source={require('../../../assets/camisa2.png')} style={styles.imagem} />
//                 <Text style={styles.nome}>Camisa 03 do São Paulo</Text>
//                 <Text style={styles.valor}>R$ 290,00</Text>
//             </View>
//             <View style={styles.anuncio}>
//                 <Image source={require('../../../assets/camisa3.png')} style={styles.imagem} />
//                 <Text style={styles.nome}>Camisa 04 do São Paulo</Text>
//                 <Text style={styles.valor}>R$ 350,00</Text>
//             </View>
//         </View>
//     );
// };

// export default Atividade2;