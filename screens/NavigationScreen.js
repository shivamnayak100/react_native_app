import { View, Text } from "react-native";

function NavigationScreen({route}){
    const id = route.params.id; 
    const name = route.params.name;


    return (
        <View>
                <Text>Hello, Nayak Navigation, {id}, {name}</Text>
        </View>
    );

}

export default NavigationScreen;