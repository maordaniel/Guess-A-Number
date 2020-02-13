import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Alert
} from 'react-native';
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";

const generateRandom = (min, max, exclude) =>{
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random()* (max-min)+ min);
    if (rndNum === exclude){
        return(generateRandom(min, max, exclude));
    }else {
        return rndNum;
    }
};

function GameScreen(props){
    const [currentGuess, setCurrentGuess] = useState(generateRandom(1,100, props.userChoice));
    const [rounds,setRound] = useState(0);
    const currentLow= useRef(1);
    const currentHigh= useRef(100);
    const { userChoice, onGameOver } = props;
    useEffect(()=>{
        if (currentGuess === props.userChoice){
            onGameOver(rounds);
        }
    },[currentGuess,userChoice,onGameOver]);
    const nextGuessHandler = (diretction) =>{
        if ((diretction === 'lower' && currentGuess < props.userChoice ) || (diretction === 'greater' && currentGuess > props.userChoice)){
            Alert.alert('don\'t Lie', 'You Know That This Is Wrong...',[{text:'Sorry', style:'cancel'}]);
            return;
        }
        if (diretction === 'lower'){
            currentHigh.current = currentGuess;
        }else{
            currentLow.current = currentGuess;
        }
        const nextNumber = generateRandom(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRound(currentRound => currentRound +1);
    };
    return(
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={nextGuessHandler.bind(this, 'lower')}/>
                <Button title="GREATER" onPress={nextGuessHandler.bind(this, 'greater')}/>
            </Card>
        </View>
    )}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center',
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:20,
        maxWidth: '80%'
    }
});

export default GameScreen;