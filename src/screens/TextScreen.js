import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    const [name, setName, password, setPassword] = useState('');
    return (
    <View>
        <Text>Enter Name: </Text>
        <TextInput 
        style={styles.input}
        //Maybe a option for caps and autocorrect, not a must
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
        />
        <Text>My name is {name}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 10,
        borderColor: 'black',
        borderWidth: 1
        
    }
});

export default TextScreen;