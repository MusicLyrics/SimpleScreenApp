import React from "react";
import { Text, StyleSheet, Button, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi there, welcome to my Homescreen</Text>
      <Button 
        title="Go to the ComponentScreen"
        onPress={() => navigation.navigate('Components')}
      />
      <Button 
        title="Go to the ListScreen"
        onPress={() => navigation.navigate('List')}
      />
      <Button 
        title="Go to the ImageScreen"
        onPress={() => navigation.navigate('Image')}
      />
      <Button 
        title="Go to the CounterScreen"
        onPress={() => navigation.navigate('Counter')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
  },
});

export default HomeScreen;
