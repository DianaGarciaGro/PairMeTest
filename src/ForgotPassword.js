import React, {useState} from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import CustomInput from "./components/CustomInput";
import CustomButton from "./components/CustomButton";
import styles from "./styles";

export default function ForgotPassword({navigation}) {
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordRepeat, setNewPasswordRepeat] = useState('');

    const onResetPasswordPressed = () => {
        Alert.alert('Reset Password pressed');
    }


    return (
        <View styles ={styles.root}>
            <Text style={styles.Title}>Reset your password</Text>

        <View style={{left: 20}}>
            <CustomInput
                placeholder="Code"
                value={code}
                setValue={setCode}/>
                 
            <CustomInput
                placeholder="New Password"
                value={newPassword}
                setValue={setNewPassword}/>
            <CustomInput
                placeholder="Type again new Password"
                value={newPasswordRepeat}
                setValue={setNewPasswordRepeat}/>
        </View>

            <CustomButton 
                text="Reset Password"
                onPress={onResetPasswordPressed}
                type="PRIMARY"/>

            <CustomButton 
                text="Sign in"
                onPress={() => navigation.navigate('Start')}
                type="TERTIARY"/>

        </View>
    );
}