import { View, Text, Button} from "react-native";
import { useLayoutEffect} from "react";

function NavigationScreen({route, navigation}){
    const id = route.params.id; 
    const name = route.params.name;

    function onPressed(){
        console.log("Hello Nayak ");
    }

    useLayoutEffect(() =>{
        navigation.setOptions({
            headerRight: () =>{
                return <Button title="Tap Me" onPress={onPressed}/>
            }
        });
    },[])




    return (
        <View>
                <Text>Hello, Nayak Navigation, {id}, {name}</Text>
        </View>
    );

}

export default NavigationScreen;