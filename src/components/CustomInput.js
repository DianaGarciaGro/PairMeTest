import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
    return (
        <View style={styles.containerCI}>
            <TextInput 
                value ={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={styles.input} 
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    containerCI: {
        width: 300,
        height: 50,
        justifyContent: 'center', 
        borderBottomColor: '#5481b8',
        borderBottomWidth: 1,
        marginBottom: 20,
        position: 'relative',
    },
    input: {
        fontSize: 20,
        color: 'black',
        width: '100%',
    },
});

export default CustomInput;