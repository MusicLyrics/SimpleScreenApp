import React, {useState} from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ColorScreen = () => {
    const [colors, setColors] = useState([]);

    return (
        // For at lave flere forskellige farver langs siden
        <View>
            <Button
                title="Add a Color"
                onPress={() => {
                    setColors([...colors, randomRgb()]);
                }}
            />
            <FlatList 
                keyExtractor={(item) => item}
                data={colors}
                renderItem={({ item }) => {
                    return <View style={{ height: 100, width: 100, backgroundColor: item }} />
                }}
            />
        </View>
        // For at lave et felt der laver random farver
        /* 
        <View>
            <Button 
                title="Add a Color"
                onPress={( => {
                    setColors([...colors, randomRgb()]);
                )}
            />
            <View style={{ height: 100, width: 100, backgroundColor: randomRgb() }} />
        </View> 
        */
    );
};

const randomRgb = () => {
    const red = Math.floor(Math.random() *256);
    const green = Math.floor(Math.random() *256);
    const blue = Math.floor(Math.random() *256);

    return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({});

export default ColorScreen;