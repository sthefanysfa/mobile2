import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';

import { ScrollView } from 'react-native';
import Cartao from './src/componentes/filme';

export default function App() {

  let [filme, setFilme] = useState([]);

  const baseURL = 'https://api.otaviolube.com/api/filmes?populate=*'

  useEffect(function(){
    fetch(baseURL)
    .then(data => data.json())
    .then(objeto => {
      console.log(objeto.data), 
      setFilme(objeto.data)})
  },[]);

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView> 
      {filme.length > 0 ? filme.map(f=> <Cartao
      filme={f.attributes}/>): <ActivityIndicator size={'larger'}/>}
      <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },

  scroll:{
    height: '100%'
  },

});
