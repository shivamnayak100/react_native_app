import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import NavigationScreen from './screens/NavigationScreen';
import SettingScreen from './screens/SettingScreen';
import MyAccountScreen from './screens/MyAccountScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="StartGameScreen">
      <Stack.Screen
        name="StartGameScreen"
        component={StartGameScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NavigationScreen"
        component={NavigationScreen}
        options={{ title: "Navigation Screen" }}
      />
    </Stack.Navigator>
  );
}

// Bottom Tab Navigator
function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <BottomTab.Screen name="Home" component={StackNavigator} 
      options={{headerShown: false}} />
      <BottomTab.Screen name="Settings" component={SettingScreen} options={{headerShown: false}}/>
    </BottomTab.Navigator>
  );
}

// Main App Component
export default function App() {
  const [fontsLoaded] = useFonts({
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="MyApp" component={BottomTabNavigator} />
          <Drawer.Screen name="MyAccountScreen" component={MyAccountScreen} />
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
