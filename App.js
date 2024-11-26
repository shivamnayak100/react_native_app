import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import NavigationScreen from './screens/NavigationScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

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
      <NavigationContainer>
        <Stack.Navigator initialRouteName="StartGameScreen">
          <Stack.Screen
            name="StartGameScreen"
            component={StartGameScreen}
            options={{
                title: "Initial Screen"
              }
            }
          />
          <Stack.Screen
            name="NavigationScreen"
            component={NavigationScreen}
            options={{
              title: "Navigation Screen"
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
});
