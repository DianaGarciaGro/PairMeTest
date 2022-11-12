import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

const CustomButton = ({onPress, text, type = "PRIMARY"}) => {
    return (
        <Pressable
            onPress={onPress}
            style={[styles.container, styles[`container_${type}`]]}>
                <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({ 
    container: {
        width: "80%", 
        padding: 15,
        marginVertical: 5,
        alignItems: "center",
        borderRadius: 5,
        alignSelf: "center",
    },
    container_PRIMARY: {
        backgroundColor: "#5481b8",
    },
    container_SECONDARY: {
        borderColor: "#5481b8",
        borderWidth: 1,
    },
    container_TERTIARY: {

    },
    text: {
        color: "white",
    },
    text_TERTIARY: {
        color: 'gray',
    },
    text_SECONDARY: {
        color: "#5481b8",
    },
});

export default CustomButton;