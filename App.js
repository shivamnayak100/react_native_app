import React from 'react';
import { StyleSheet, SafeAreaView, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style= {styles.container} source= {require('./assets/splash-icon.png')} resizeMethod='auto'>
       <StartGameScreen />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
});
