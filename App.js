import React, {Component} from 'react';
import { useState } from 'react/cjs/react.development';
import { Button, Image, StyleSheet, Text, View } from "react-native";

const logoUri = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png';

// Componente de Classe (Código da atividade 2 itens 'a' e 'b')
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  render(){
      return (
              <View style={styles.app}>
                  <View style={styles.header}>
                      <Image
                          accessibilityLabel="React logo"
                          source={{ uri: logoUri }}
                          resizeMode="contain"
                          style={styles.logo}
                      />
                      <Text style={styles.title}>React Native</Text>
                      <Text style={styles.count}>Count:{this.state.count}</Text>
                  </View>
                  <Button onPress={() => this.setState({ count: this.state.count + 1 })} title="Counter button" />
              </View>
          );
          
          
  }
}

// Componente de Função (Código da atividade 2 item 'c')
/*
export default function App(){
  const [count, setCount] = useState(0);
    return (
          <View style={styles.app}>
              <View style={styles.header}>
                  <Image
                      accessibilityLabel="React logo"
                      source={{ uri: logoUri }}
                      resizeMode="contain"
                      style={styles.logo}
                  />
                  <Text style={styles.title}>React Native</Text>
                  <Text style={styles.count}>Count:{count}</Text>
              </View>
              <Button onPress={() => setCount(count + 1)} title="Counter button" />
          </View>
      );
}
*/

//Estilo da pagina
const styles = StyleSheet.create({
  app: {
    flex:1,
    backgroundColor:'#FFF',
    padding:50,
  },
  header: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  logo: {
    flex:1,
    width:250,
    resizeMode:'contain'
  },
  title: {
    flex:1,
    fontSize: 40,
  },
  count: {
    flex:1,
    fontSize: 30,
  },
});






//Atividade 1 - Contador de palavras
function countWord(){
  const phrase='Não acho que quem ganhar ou quem perder nem quem ganhar nem perder vai ganhar ou perder vai todo mundo perder';
  
  var wordCounts = {};

  var lista = phrase.split(" ").sort();
  var map = new Map()
  var total = 1;

  for (let i=0; i<lista.length; i++){
    if(i<lista.length-1 && lista[i]==lista[i+1]){
      total++;
    }else{
      map.set(lista[i],total);
      total=1;
    }
  }
  wordCounts = Object.fromEntries(map);
  console.log(wordCounts);
}





