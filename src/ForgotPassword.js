import React, {useState} from "react";
import { Text, View, Dimensions, Alert } from "react-native";
import { Input, Button } from '@rneui/themed';
import styles from "./styles";
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from "./config/firebase";

export default function ForgotPassword({navigation}) {
    const [code, setCode] = useState('');
    const [email2, setEmail2] = useState('');
    const [Visible, setVisible] = useState(true);

    const windowWidth = Dimensions.get('window').width;

    const sendPassword = () => {
        sendPasswordResetEmail(auth, email2)
        .then(() => {
            Alert.alert('Password reset email sent! Check junk mail');
            setVisible(false);
            setEmail2('');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            Alert.alert(errorMessage);
        });
        navigation.navigate('Start');
    }


    return (
        <View styles ={styles.root}>
        
        <Text style={styles.Title}>Reset your password</Text>

            <View style={{paddingTop:20, left:20, right: 20 }}>
            <Input
                style={styles.input}
                placeholder="Email"
                label= "Write your email"
                value={email2}
                onChangeText={text => setEmail2(text)} />
            </View>

            <Button 
                title="SEND" 
                onPress={sendPassword}
                type="PRIMARY" />

            <Button 
                title="Forget it, I remember it now" 
                onPress={() => navigation.navigate('Start')}
                type="PRIMARY" />
            
        </View>
    );
}


{/*        <View style={{left: 20}}>
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
        </View>*/}