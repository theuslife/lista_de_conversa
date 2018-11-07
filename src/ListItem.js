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

    }

    render(){
        return(
            <TouchableHighlight onPress={this.click} underlayColor='red'>
                <View style={styles.item}>
                    <Image source={{ uri: this.props.data.img }} style={styles.imagem} />
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
        borderWidth: 1,
        borderColor: '#CCCCCC',
        flex: 1,
        flexDirection: 'row'
    },
    imagem: {
        width: 40,
        height: 40,
        marginTop: 20,
        borderRadius: 20
    }
})