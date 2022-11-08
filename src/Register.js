import React, {useState} from "react";
import { Alert, Dimensions, Text, View } from "react-native";
import CustomInput from "./components/CustomInput";
import CustomButton from "./components/CustomButton";
import { Feather } from '@expo/vector-icons';
import styles from "./styles";
import {firebase} from "./config/firebase";
import { auth } from "./config/firebase";
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';

import { doc, setDoc } from "firebase/firestore"; 
import { db } from "./config/firebase";

export default function Register({navigation}) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            sendEmailVerification(user);
            updateProfile(user, {
                displayName: username,
            })
            .then(() => {
                alert("Account created successfully");
            })
            .catch((error) => {
                alert(error);
            })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });

        navigation.navigate('Name');
    }
    
    const onTermsOfUsePressed = () => {
        Alert.alert("Terms of use pressed");
    }
    
    const onPrivacyPolicyPressed = () => {
        Alert.alert("Privacy policy pressed");
    }

    return (
        <View styles ={styles.root}>
            <Text style={styles.Title}>Create an Account</Text>

            <View style={{flexDirection:'row', left: 20}}>
                <Feather
                    name="user"
                    style={styles.icon}
                />
                <CustomInput
                    placeholder="Username"
                    label="Username"
                    value={username}
                    setValue={setUsername}
                    />
            </View>
            <View style={{flexDirection:'row', left: 20}}>
                <Feather
                    name="mail"
                    style={styles.icon}
                />
                <CustomInput
                    placeholder="Email"
                    label="Email"
                    value={email}
                    setValue={setEmail}
                    />
            </View>
            <View style={{flexDirection:'row', left: 20}}>
                <Feather
                    name="lock"
                    style={styles.icon}
                />
                <CustomInput
                    placeholder="Password"
                    label="Password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true}/>
            </View>

            <View style={{left:50}}>
                <CustomButton
                    text= "Already have an account? →"
                    onPress={() => navigation.navigate('Start')}
                    type="TERTIARY"/>
            </View>

            <CustomButton
                text="Register"
                onPress={register}/>

            <Text style={styles.text}>
                By registering, you confirm that you accept our  
                <Text 
                    style={styles.link}
                    onPress={onTermsOfUsePressed}> Terms of Use </Text> and 
                <Text 
                    style={styles.link}
                    onPress={onPrivacyPolicyPressed}> Privacy Policy</Text>
            </Text>
        </View>
    )
}