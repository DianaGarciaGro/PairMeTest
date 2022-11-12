import React, {useState } from "react";
import { Text, View } from "react-native";
import styles from "../styles";
import { Input } from '@rneui/themed';
import { Button } from "@rneui/base";
import { push, ref } from "firebase/database";
import { db } from "../config/firebase";

export default function Birthday ({route, navigation}) {
    const [Birthday, setBirthday] = useState('');

    const saveBirthday = () => {
        push(
            ref(db, 'data/'),
            { 'Birthday': Birthday });
        navigation.navigate('Nationality', {Birthday: Birthday});
    }

    return (
        <View styles ={styles.root}>

            <View style={{flexDirection: 'row', justifyContent: 'space-between'}} >
                <Text 
                    style={[styles.Normal, {fontWeight: 'bold', padding: 5}]}
                    onPress={() => navigation.navigate('Gender')}
                    > ← </Text>
            </View>

            <Text style={[styles.container, styles[`container_NUMBER`]]}> 3/6 </Text>
            <Text style={styles.QUESTION}> When do we celebrate your Birthday? </Text>
            <View style={styles.answer}>
                <Input
                    placeholder=" DD/MM/YYYY " 
                    value={Birthday}
                    onChangeText={text => setBirthday(text)}/>
            </View>

            <Button
                onPress={saveBirthday}
                title="Next"
                type="PRIMARY"
                color={'#5481b8'}
                style={{left: 20, right: 20, bottom: 20}}
                accessibilityLabel="Next"/>
        </View>
    );
}
