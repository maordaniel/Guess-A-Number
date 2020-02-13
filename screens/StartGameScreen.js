import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';
import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";

function StartGameScreen(props){
    const [enteredValue, setEnteredValue] = useState("");
    const [confirmed, setConfirmed] = useState(false);
    const [selectNumber, setSelectNumber] = useState(false);

    const numberInputHandler = (inputText) =>{
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    };
    const resetInputHandler = () =>{
        setEnteredValue('');
        setConfirmed(false);

    };
    const confirmInputHandler = () =>{
        const chooseNumber = parseInt(enteredValue);
        if(isNaN(chooseNumber) || chooseNumber <=0 || chooseNumber >99){
            Alert.alert("Invalid Number","Please Try Again",[{text:'Okay' ,style:'destructive', onPress: resetInputHandler}]);
            return;
        }
        setConfirmed(true);
        setSelectNumber(chooseNumber);
        setEnteredValue('');
        Keyboard.dismiss()
    };
    let confirmedOutput;
    if (confirmed){
        confirmedOutput =
        <Card style={{marginTop:20,alignItems:'center'}}>
            <Text>You Selected:</Text>
            <NumberContainer>{selectNumber}</NumberContainer>
            <Button title="Start Game" onPress={()=> {props.onStartGame(selectNumber)}}/>
        </Card>
    }
    return(
        <TouchableWithoutFeedback onPress={() =>{ Keyboard.dismiss()}}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start A New Game !</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select A Number</Text>
                    <Input
                        style={styles.input}
                        blurOnsubmit
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='number-pad'
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View color="#c717fc"><Button title='Reset' onPress={resetInputHandler} /></View>
                        <View color="#f7287b"><Button title='Confirm' onPress={confirmInputHandler} /></View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center'
    },
    title:{
        fontSize: 20,
        marginVertical:10
    },
    buttonContainer:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal:15,

    },
    inputContainer:{
        width: 300,
        alignItems: 'center',
        maxWidth: '80%'
    },
    input:{
        width:50,
        textAlign:'center'
    }
});

export default StartGameScreen;