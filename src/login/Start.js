import * as React from 'react';
import {useState} from 'react';
import { Image, useWindowDimensions, View, Text, Dimensions } from 'react-native';
import { Input, Button } from '@rneui/themed';
import CustomButton from '../components/CustomButton';
import styles from '../styles';
import { Feather } from '@expo/vector-icons';
import { auth } from '../config/firebase';
import { Overlay } from '@rneui/base';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';

const windowWidth = Dimensions.get('window').width;

export default function Start({navigation}) {
    const {height} = useWindowDimensions();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isVisible, setisVisible] = useState(false);
    const [email2, setEmail2] = useState('');

    const signin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              if (userCredential.user.emailVerified == false){
                navigation.replace('Home');
            }
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
          });
    };

    const openForgotPassword = () => {
        if (isVisible==true){
            setisVisible(false)
        }else{
            setisVisible(true)
        }
      }; 

      const sendPassword = () => {
        sendPasswordResetEmail(auth, email2)
            .then(()=>{alert('An email has been sent to you');
            setisVisible(false);
            setEmail2('');
        })
  }; 

    return (
        <View style={styles.root}>
            <Image
                source={require('../../assets/Logo3.png')}
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
                onPress={openForgotPassword}
                type="TERTIARY"/>

            <Overlay isVisible={isVisible}>

            <View style={{paddingTop: 20}}>
                <Input
                    placeholder='Email'
                    label='Forgotten password'
                    leftIcon={{ type: 'material', name: 'email' }}
                    value={email2}
                    onChangeText={text => setEmail2(text)} autoCompleteType={undefined}/>
            </View>
            <View style={[styles.Button, {justifyContent: 'space-around'}]}>
                <Button title="Send Email" 
                    buttonStyle={{borderRadius: 10}} 
                    style={{paddingVertical:25}} 
                    onPress={sendPassword} />
                <Button title="Forget it, I remember" 
                    buttonStyle={{borderRadius: 10}} 
                    style={{ width:windowWidth*0.9, paddingVertical:15}} 
                    onPress={openForgotPassword} />
            </View>
            </Overlay>
        </View>
    );
}