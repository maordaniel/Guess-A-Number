import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';

function Input(props){
    return(
        <TextInput {...props} style={{...styles.input, ...props.style}}/>
    )}

const styles = StyleSheet.create({
    input:{
        height:40,
        borderBottomWidth:1,
        borderBottomColor:'grey',
        marginVertical:10
    }
});

export default Input;