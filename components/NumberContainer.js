import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';

function NumberContainer(props){
    return(
        <View style={styles.container}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    )}

const styles = StyleSheet.create({
    container:{
        borderWidth:2,
        borderColor:'#c717fc',
        padding:10,
        borderRadius:10,
        marginVertical:10,
        alignItems:'center',
        justifyContent:'center',
    },
    number:{
        color:'#c717fc',
        fontSize:22,
    }
});

export default NumberContainer;