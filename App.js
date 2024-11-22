import React from 'react';
import { StyleSheet, SafeAreaView, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
 const [fontsLoaded]= useFonts({
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf')
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

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
