import { Button, Image, Text, View } from "react-native";

import styles from './style';

const baseUrl = 'https://api.otaviolube.com'


export default function Cartao({filme}){

    const imgURL = baseUrl + filme.poster.data.attributes.url

    return(
        
        <View style={styles.container}>
            <View style={styles.viewimg}>
                <Image style={styles.img} source ={{uri: imgURL}}/>
            </View>
            <View style={styles.viewdata}>
                <Text style={styles.titulo}>{filme.titulo} </Text>                
                <Text style={styles.descricao}>{filme.sinopse} </Text>                
                <Button style={styles.btn} title=" comprar "/>             

            </View>
        </View>
    );
}