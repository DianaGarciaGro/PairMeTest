import React, {useState } from "react";
import { Text, View } from "react-native";
import styles from "../styles";
import { Input } from '@rneui/themed';
import { Button } from "@rneui/base";
import { push, ref } from "firebase/database";
import { db } from "../config/firebase";

export default function Studies ({route, navigation}) {
    const [Bachelors, setBachelors] = useState('');

    const saveBachelors = () => {
        push(
            ref(db, 'data/'),
            { 'Bachelors': Bachelors });
        navigation.navigate('Partner', {Studies: Bachelors});
    }

    return (
        <View styles ={styles.root}>

            <View style={{flexDirection: 'row', justifyContent: 'space-between'}} >
                <Text 
                    style={[styles.Normal, {fontWeight: 'bold', padding: 5}]}
                    onPress={() => navigation.navigate('Nationality')}
                    > ← </Text>
            </View>

            <Text style={[styles.container, styles[`container_NUMBER`]]}> 5/6 </Text>
            <Text style={styles.QUESTION}> What's your Bachelor? </Text>
            <View style={styles.answer}>
                <Input
                    placeholder=" Bachelor's Degree "
                    value={Bachelors}
                    onChangeText={text => setBachelors(text)}/>
            </View>

            <Button
                onPress={saveBachelors}
                title="Next"
                type="PRIMARY"
                color={'#5481b8'}
                style={{left: 20, right: 20, bottom: 20}}
                accessibilityLabel="Next"/>
        </View>
    );
}