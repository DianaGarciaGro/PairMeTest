import * as React from 'react';
import {useState} from 'react';
import { Image, useWindowDimensions, View, Text } from 'react-native';
import { Input } from '@rneui/themed';
import CustomButton from './components/CustomButton';
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import { auth } from './config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Start({navigation}) {
    const {height} = useWindowDimensions();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const signin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              if (userCredential.user.emailVerified == false){
                  alert('Time to verify your email')
              }else{
                navigation.replace('Start');
            }
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
          });
        navigation.navigate('Home')
    }

    return (
        <View style={styles.root}>
            <Image
                source={require('../assets/Logo3.png')}
                resizeMode="contain"
                style={[styles.LogoPNG, {height: height * 0.3}]}/>

            <Text style={styles.Title}>Welcome!</Text>

            <View style={styles.row}>
                <Feather
                    name="mail"
                    style={styles.icon}
                />
                <Input
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)} />
            </View>

            <View style={styles.row}>
                <Feather
                    name="lock"
                    style={styles.icon}
                />
            <Input
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry={true}/>
            </View>

            <CustomButton
                text="SIGN IN"
                onPress={signin}
                type="PRIMARY"/>

            <CustomButton
                text="REGISTER"
                onPress={() => navigation.navigate('Register')}
                type="PRIMARY"/>

            <CustomButton 
                text="Forgot password?"
                onPress={() => navigation.navigate('ForgotPassword')}
                type="TERTIARY"/>
        </View>
    );
}