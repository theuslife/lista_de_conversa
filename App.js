import React from 'react';
import { StyleSheet, View, FlatList, Platform, Text } from 'react-native';
import { ListItem } from './src/ListItem';

export default class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      list: [
        {key: '1', img: 'https://b7web.com.br/avatar1.png', nome: 'Luke Cage', msg: 'Hoje levantei um onibus com apenas uma mão, o pessoal ao redor não acreditou' },
        {key: '2',  img: 'https://b7web.com.br/avatar2.png', nome: 'Soul Goodman ', msg: 'Não pera um pouco, você sabe que não somos corruptos, mas apenas estamos fazendo isto para o bem de ambos' },
        {key: '3',  img: 'https://b7web.com.br/avatar1.png', nome: 'Carl Johnson', msg: 'A groove street sempre será verde' },
        {key: '4',  img: 'https://b7web.com.br/avatar3.png', nome: 'Viuva Negra', msg: 'O nosso Bruce Banner não sabe, mas estou preparando uma festa surpresa para ele!' },
        {key: '5',  img: 'https://b7web.com.br/avatar3.png', nome: 'Lara Croft', msg: 'Uma grande aventura me espera, não poderei estar ao seu lado. Há reliquias a minha espera, sinto muito' },
        {key: '6',  img: 'https://b7web.com.br/avatar2.png', nome: 'Ned Stark', msg: 'A honra é a espada mais forte de um homem, entretanto é afiada o bastante para o mata-lo' },
        {key: '7',  img: 'https://b7web.com.br/avatar3.png', nome: 'Elizabeth', msg: 'O meu amor Meliodas e os pecados capitais são minha familia, amo eles de todo coração.' },
        {key: '8',  img: 'https://b7web.com.br/avatar2.png', nome: 'Jon Snow', msg: 'Eu não sei de nada' },
        {key: '9',  img: 'https://b7web.com.br/avatar3.png', nome: 'Bulma', msg: 'Vegeta é o maior de todos, um bom pai e um bom guerreiro' },
        {key: '10',  img: 'https://b7web.com.br/avatar2.png', nome: 'Steve jobs', msg: 'A apple sempre foi e sempre será sinônimo de evolução técnologica' },
        {key: '11',  img: 'https://b7web.com.br/avatar1.png', nome: 'Pantera Negra', msg: 'Wakanda forever irmãos!' },
        {key: '12',  img: 'https://b7web.com.br/avatar3.png', nome: 'Yennefer de Vengerberg', msg: 'O Geralt The Rivia é meu grande amor, um dia sei que poderemos ter nossa paz diante tanto conflito e guerras' },
      ]
    }
  }

  render () {
      return (
        <View style={styles.container} >
          <View style={styles.listTitleContainer}> 
            <Text style={styles.listTitle} >Listagem</Text>
          </View>
          <FlatList 
            data={this.state.list}
            renderItem={ ({item}) => <ListItem data={item} />}
          />
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: (Platform.OS === 'ios') ? 30: 0,
  },
  listTitleContainer: {
    borderBottomWidth: 1,
    borderColor: '#CCCCCC',
    marginBottom: 2
  },
  listTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 2
  }
});
