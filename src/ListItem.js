import React, { Component } from 'react';
import { View, TouchableHighlight , StyleSheet, Text, Image} from 'react-native';

export class ListItem extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
        this.click = this.click.bind(this);
    }

    click(){
        alert(this.props.data.msg)
    }

    render(){
        return(
            <TouchableHighlight onPress={this.click} underlayColor='#E0E0E0'>
                <View style={styles.item}>
                    <Image source={{ uri: this.props.data.img }} style={styles.imagem} />
                    <View style={styles.info} >
                        <Text style={styles.nome}>{this.props.data.nome}</Text>
                        <Text numberOfLines={1} style={styles.msg}>{this.props.data.msg}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

}

const styles = StyleSheet.create({
    item: {
        height: 60,
        marginLeft: 10,
        marginRight: 10,
        borderBottomWidth: 1,
        borderColor: '#CCCCCC',
        flex: 1,
        flexDirection: 'row'
    },
    imagem: {
        width: 40,
        height: 40,
        marginTop: 10,
        borderRadius: 20
    },
    info: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 10
    },
    nome: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    msg: {
        marginTop: 2
    }
})