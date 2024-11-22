import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Alert } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
  const [enterNumber, setEnterNumber] = useState('');

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

  return (
    <View style={styles.screen}>
      <TextInput
        style={styles.numberInput}
        keyboardType="number-pad"
        maxLength={3}
        onChangeText={numberInputHandler}
        value={enterNumber} 
      />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
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
});

export default StartGameScreen;
