import React, {useEffect, useState } from "react";
import { Text, View, ScrollView } from "react-native";
import { Input } from '@rneui/themed';
import { getDatabase, push, ref, onValue, remove } from "firebase/database";
import { db } from "../config/firebase";
import styles from "../styles";
import { Button } from "@rneui/base";

export default function Name ({navigation}) {
    const [Name, setName] = useState('');

    useEffect(() => {
        onValue(ref(db, 'data/'), (snapshot) => {
            const data = snapshot.val();
            const keys = Object.keys(data);
            const dataWithKeys = Object.values(data);
            if (!data) {
                setName('');}
            else {
                setName(dataWithKeys);
            }
        })},
    []);

    const saveName = () => {
        push(
            ref(db, 'data/'),
            { 'Name': Name });
        navigation.navigate('Gender');
    }

    return (
        <View styles ={styles.root}>
            <ScrollView style={styles.scrollView}>

            <View style={{left: 270}} >
                <Text 
                    style={[styles.Normal, {fontWeight: 'bold', paddingEnd: 20, left: 45}]}
                    onPress={() => navigation.navigate('Gender')}> → </Text>
            </View>

            <Text style={[styles.container, styles[`container_NUMBER`]]}> 1/6 </Text>
            <Text style={[styles.QUESTION, {fontWeight: 'bold'}]}>   Welcome to PairMe! </Text>
            <Text style={styles.QUESTION}>Let's start creating your profile{"\n"}Tell us your first and last name</Text>
            <View style={styles.answer}>
                <Input
                    placeholder="First and last name"
                    value={Name}
                    onChangeText={text => setName(text)}/>
            </View>

            <Button
                onPress={saveName}
                title="Next"
                type="PRIMARY"
                color={'#5481b8'}
                style={{left: 20, right: 20, bottom: 20}}
                accessibilityLabel="Next"/>

            </ScrollView>
        </View>
    );
}
