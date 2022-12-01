import React, { useState, useEffect } from 'react';
import { database, db, firebaseConfig } from '../../config/firebase';
import { querySnapshot } from 'firebase/firestore';
import { AuthCredential, signOut } from "firebase/auth";
import { auth } from '../../config/firebase';
import { View, Text, ScrollView, SafeAreaView} from 'react-native';
import { Button } from '@rneui/themed';
import Imagen from '../../components/Avatar';
import { Feather } from '@expo/vector-icons';
import styles from '../../styles';
import { onValue } from 'firebase/database';
import { ref } from "firebase/database";

console.log(auth);

const Profile = ({route, navigation}) => {
    const [follow, setFollow] = useState(0);
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        onValue(ref(db, 'User/'), (snapshot) => {
          const data = snapshot.val();
          console.log(data)
          if(!data) {
          setIndexes([]);    
          }else{
            setUserInfo(Object.values(data));
          }
        })
      }, []);

      console.log(userInfo);

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
{/*This is where I want to display the Nationality from the database*/}
                <Text style={styles.textSide}>{userInfo.Nationality}</Text> 
            </View>
            <View style={styles.rowProfile}>
                <Feather
                    name='mail'
                    size={20}
                    color='#5481b8'/>
                <Text style={styles.textSide}>{auth.currentUser.email}</Text>
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
                <Text style={styles.title}> {follow} </Text>
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
                    onPress={() => {setFollow(follow+1)}}/>
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
                    onPress={() => navigation.navigate('Login')}/>
            </View>
        </View>
        </ScrollView>
    </SafeAreaView>
    );
};

export default Profile;