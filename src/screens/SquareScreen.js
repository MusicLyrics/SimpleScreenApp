import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import ColorCounter from "../components/ColorCounter";

const Color_Increment = 15;
//action = HowToChangeStateObject
const reducer =(state, action) => {
    //state = {red: number, green: number, blue: number}
    //action = { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15}

    switch (action.colorToChange) {
        case 'red':
            return state.red + action.amount > 255 || 
            state.red + action.amount < 0 
            ? state 
            : { ...state, red: state.red + action.amount}
        case 'green':
            return state.green + action.amount > 255 || 
            state.green + action.amount < 0
            ? state 
            : { ...state, green: state.green + action.amount }
        case 'blue':
            return state.blue + action.amount > 255 || 
            state.blue + action.amount < 0 
            ? state 
            : { ...state, blue: state.blue + action.amount}
        default:
            return state;
    }
};

const SquareScreen = () => {
    const [state, runMyReducer] = useReducer(reducer, {red: 0, green: 0, blue: 0 })
    const { red, green, blue } = state;

    return (
        <View>
            <ColorCounter 
            onIncrease={() => runMyReducer({ colorToChange: 'red', amount: Color_Increment })}
            onDecrease={() => runMyReducer({ colorToChange: 'red', amount: -1 * Color_Increment})}
            color="Red"/>
            <ColorCounter 
            onIncrease={() => runMyReducer({ colorToChange: 'green', amount: Color_Increment})}
            onDecrease={() => runMyReducer({ colorToChange: 'green', amount: -1 * Color_Increment})} 
            color="Green"/>
            <ColorCounter 
            onIncrease={() => runMyReducer({ colorToChange: 'blue', amount: Color_Increment})}
            onDecrease={() => runMyReducer({ colorToChange: 'blue', amount: -1 * Color_Increment})} 
            color="Blue"/>
            <View style= {{ 
                height: 150, 
                width: 150, 
                backgroundColor: `rgb(${red}, ${green}, ${blue})` 
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({});

export default SquareScreen;