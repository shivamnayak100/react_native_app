import { View, Text } from "react-native";

function NavigationScreen({route}){
    const { enteredNumber } = route.params; 
    

    return (
        <View>
                <Text>Hello, Nayak Navigation, {enteredNumber}</Text>
        </View>
    );

}

export default NavigationScreen;