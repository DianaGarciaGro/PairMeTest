import * as React from 'react';
import {useState} from 'react';
import { StyleSheet, Image, useWindowDimensions, View, Text, Alert, Button, TouchableOpacity } from 'react-native';
import CustomInput from './components/CustomInput';
import CustomButton from './components/CustomButton';
import styles from './styles';
import { Feather } from '@expo/vector-icons';

export default function Start({navigation}) {
    const {height} = useWindowDimensions();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
                <CustomInput
                    placeholder="Email"
                    value={email}
                    setValue={setEmail}/>
            </View>

            <View style={styles.row}>
                <Feather
                    name="lock"
                    style={styles.icon}
                />
            <CustomInput
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry={true}/>
            </View>

            <CustomButton
                text="SIGN IN"
                onPress={() => navigation.navigate('Home')}
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