import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import NavigationScreen from './screens/NavigationScreen';
import SettingScreen from './screens/SettingScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator} from '@react-navigation/drawer'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// This is for simple Navigation. 
function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="StartGameScreen">
      <Stack.Screen
        name="StartGameScreen"
        component={StartGameScreen}
      />
      <Stack.Screen
        name="NavigationScreen"
        component={NavigationScreen}
        options={{ title: "Navigation Screen" }}
      />
    </Stack.Navigator>
  );
}


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
        <Drawer.Navigator>
          <Drawer.Screen name="MyApp" component={StackNavigator} />
          <Drawer.Screen name="SettingScreen" component={SettingScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
});
