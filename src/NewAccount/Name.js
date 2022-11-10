import React, {useState } from "react";
import { Text, View, ScrollView } from "react-native";
import { Input } from '@rneui/themed';
import styles from "../styles";
import { Button } from "@rneui/base";
import { push, ref } from "firebase/database";
import { db } from "../config/firebase";


export default function Name ({navigation}) {
    const [Name, setName] = useState('');

    const saveName = () => {
        push(
            ref(db, 'data/'),
            { 'Name': Name });
        navigation.navigate('Gender');
    }

    return (
        <View styles ={styles.root}>

            <View style={{left: 270}} >
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
        </View>
    );
}
