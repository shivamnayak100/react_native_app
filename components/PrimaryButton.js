import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';




function PrimaryButton({ children }) {

    function pressHandler(){
        console.log("Hello button ");
    }

    return (
        <Pressable style={styles.button} onPress={pressHandler} >
            <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#6200ee',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        margin: 5
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default PrimaryButton;
