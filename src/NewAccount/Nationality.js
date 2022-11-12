import React, {useState } from "react";
import { Text, View } from "react-native";
import styles from "../styles";
import { Input } from '@rneui/themed';
import { Button } from "@rneui/base";
import { push, ref } from "firebase/database";
import { db } from "../config/firebase";

export default function Nationality ({route, navigation}) {
    const [Country, setCountry] = useState('');

    const saveNationality = () => {
        push(
            ref(db, 'data/'),
            { 'Nationality': Country });
        navigation.navigate('Studies', {Nationality: Country});
    }

    return (
        <View styles ={styles.root}>

            <View style={{flexDirection: 'row', justifyContent: 'space-between'}} >
                <Text 
                    style={[styles.Normal, {fontWeight: 'bold', padding: 5}]}
                    onPress={() => navigation.navigate('Birthday')}
                    > ← </Text>
            </View>

            <Text style={[styles.container, styles[`container_NUMBER`]]}> 4/6 </Text>
            <Text style={styles.QUESTION}> What's your Nationality? </Text>
            <View style={styles.answer}>
                <Input
                    placeholder=" Country "
                    value={Country}
                    onChangeText={text => setCountry(text)}/>
            </View>

            <Button
                onPress={saveNationality}
                title="Next"
                type="PRIMARY"
                color={'#5481b8'}
                style={{left: 20, right: 20, bottom: 20}}
                accessibilityLabel="Next"/>
        </View>
    );
}