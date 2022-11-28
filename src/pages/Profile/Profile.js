import React, { useState, useEffect } from 'react';
import { firebaseConfig } from '../../config/firebase';
import { querySnapshot } from 'firebase/firestore';
import { signOut } from "firebase/auth";
import { auth } from '../../config/firebase';
import { View, Text, ScrollView, SafeAreaView} from 'react-native';
import { Button } from '@rneui/themed';
import Imagen from '../../components/Avatar';
import { Feather } from '@expo/vector-icons';
import styles from '../../styles';

console.log(auth);

const signOutNow = () => {
    signOut(auth).then(() => {
       NativeModules.DevSettings.reload();
    }).catch((error) => {
    });
}

const openUpdate = () => {
    if (isVisible==true){
        setisVisible(false)
    }else{
        setisVisible(true)
        setNewName('');
    }
  }; 

const Profile = ({route, navigation}) => {
    return (
    <SafeAreaView style={{flex: 1}}>
        <ScrollView>
        <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15, paddingTop: 20}}>
                <Imagen/>
                <View style={{marginLeft: 20}}>
                    <Text style={[styles.title, {marginTop: 15, marginBottom: 5}]}>{auth.currentUser.displayName}</Text>
                    <Text style={styles.caption}>@dianagarcia</Text>
                </View>
            </View>
        </View>

        <View style={styles.userInfoSection}>
            <View style={styles.rowProfile}>
                <Feather
                    name='map-pin'
                    size={20}
                    color='#5481b8'/>
                <Text style={styles.textSide}>México</Text>
            </View>
            <View style={styles.rowProfile}>
                <Feather
                    name='mail'
                    size={20}
                    color='#5481b8'/>
                <Text style={styles.textSide}>dianagarciaguerrero@hotmail.com</Text>
            </View>
            <View style={styles.rowProfile}>
                <Feather
                    name='award'
                    size={20}
                    color='#5481b8'/>
                <Text style={styles.textSide}>Business Technology</Text>
            </View>
            <View style={styles.rowProfile}>
                <Feather
                    name='calendar'
                    size={20}
                    color='#5481b8'/>
                <Text style={styles.textSide}>20/03/2002</Text>
            </View>
            <View style={styles.rowProfile}>
                <Feather
                    name='linkedin'
                    size={20}
                    color='#5481b8'/>
                <Text style={styles.textSide}> linkedin </Text>
            </View>
        </View>
        <View>
            <Text style={[styles.textSide, {paddingBottom: 15}]}> I would love to develope a Startup company that help enterprenours to match with a great pair </Text>
        </View>

        <View style={styles.infoBoxWrapper}>
            <View style={styles.infoBox}>
                <Text style={styles.title}> 10 </Text>
                <Text style={styles.caption}> Follows </Text>
            </View>
            <View style={styles.infoBox}>
                <Text style={styles.title}> 3 </Text>
                <Text style={[styles.caption, {alignContent: 'center'}]}> Years of {'\n'} Experience </Text>
            </View>
        </View>

        <View style={styles.menuWrapper}>
            <View style={styles.menuItem}>
                <Button 
                    icon= {
                        <Feather
                            name='heart'
                            size={25}
                            color='#5481b8'/>}
                    title="Follow"
                    type="clear"
                    onPress={() => {}}/>
            </View>
            <View style={styles.menuItem}>
                <Button 
                    icon= {
                        <Feather
                            name='share'
                            size={25}
                            color='#5481b8'/>}
                    title="Share with friend"
                    type="clear"
                    onPress={() => {}}/>
            </View>
            <View style={styles.menuItem}>
                <Button 
                    icon= {
                        <Feather
                            name='log-out'
                            size={25}
                            color='#5481b8'/>}
                    title="Log out"
                    type="clear"
                    onPress={signOutNow}/>
            </View>
        </View>
        </ScrollView>
    </SafeAreaView>
    );
};

export default Profile;