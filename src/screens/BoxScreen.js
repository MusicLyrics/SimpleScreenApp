import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.ParentStyle}>
            <View style={styles.childStyle1}/>
            <View style={styles.childStyle2}/>
            <View style={styles.childStyle3}/>
        </View>
    )
};
//Look at section 7: for handle layout
const styles = StyleSheet.create({
    ParentStyle: {
        borderWidth: 2,
        borderColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 200
    },
    childStyle1: {
        height: 50,
        width: 100,
        backgroundColor: 'red'
    },
    childStyle2: {
        height: 50,
        width: 100,
        borderWidth: 1,
        backgroundColor: 'green',
        alignSelf:'center'
    },
    childStyle3: {
        height: 50,
        width: 100,
        borderWidth: 1,
        backgroundColor: 'purple'
    }
})
export default BoxScreen;