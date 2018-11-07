import React from 'react';
import { StyleSheet, Text, View, FlatList, Platform } from 'react-native';
import { ListItem } from './src/ListItem';

export default class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      list: [
        {key: '1', img: 'https://b7web.com.br/avatar1.png', nome: 'Matheus Rodrigues', msg: 'Acesse os nossos produtos' },
        {key: '2',  img: 'https://b7web.com.br/avatar2.png', nome: 'José Medeiros ', msg: 'Olá, tudo bem?' },
        {key: '3',  img: 'https://b7web.com.br/avatar1.png', nome: 'Augusto Lino', msg: 'TEM QUE VER ISTO AQUI MAN' },
        {key: '4',  img: 'https://b7web.com.br/avatar3.png', nome: 'Maria Rodrigues', msg: 'Oi Maria, você viu a última postagem do Felipe?' },
      ]
    }
  }

  render () {
      return (
          <FlatList 
            data={this.state.list}
            renderItem={ ({item}) => <ListItem data={item} />}
          />
      )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
});
