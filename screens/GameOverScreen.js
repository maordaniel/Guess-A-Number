import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';

function GameOverScreen(props){
    return(
        <View style={styles.screen}>
            <Text>The Game Is Over!</Text>
            <Text>Number Of Rounds: {props.roundNumber}</Text>
            <Text>Number Was: {props.userNumber}</Text>
            <Button title='New Game' onPress={props.onRestart}/>
        </View>
    )}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
});

export default GameOverScreen;