import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Alert, Text, Button, ImageBackground } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';

function StartGameScreen() {
  const [enterNumber, setEnterNumber] = useState('');
  const navigation = useNavigation();

  const numberInputHandler = (input) => {
    console.log("Entered number:", input);
    setEnterNumber(input);

    if (!isNaN(input) && parseInt(input) > 100) {
      Alert.alert(
        "Number Exceeded",
        "The number you entered is greater than 100!",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          {
            text: "OK",
            onPress: () => console.log("OK Pressed"),
          },
        ]
      );
    }
  };

  const navigateToNextScreen = () => {
    navigation.navigate('NavigationScreen', { id: 100, name: 'Shivam', navigation: navigation}); 

    // We can also set a Option from here 
    navigation.setOptions({
      title:"Nayak Navigation"
    })
  };

  return (
    <View style={styles.screen}>
      <ImageBackground style= {styles.container} source= {require('../assets/splash-icon.png')} resizeMethod='auto'>
      <Text style = {styles.textStyle}> Hello, This is a Super Game</Text>
      <TextInput
        style={styles.numberInput}
        keyboardType="number-pad"
        maxLength={3}
        onChangeText={numberInputHandler}
        value={enterNumber} 
      />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
      <Button
          onPress={navigateToNextScreen}
          title="Click to Navigate"
          color="#6200ee"
          accessibilityLabel="Learn more about this purple button"
        />
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  numberInput: {
    height: 40,
    width: 100,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 18,
  },
  textStyle:{
    fontFamily: 'open-sans-bold'
  }
});

export default StartGameScreen;
