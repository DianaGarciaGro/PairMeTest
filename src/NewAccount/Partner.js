import React, {useState } from "react";
import { Text, View } from "react-native";
import styles from "../styles";
import { Input } from '@rneui/themed';
import { Button } from "@rneui/base";
import { push, ref } from "firebase/database";
import { db } from "../config/firebase";

export default function Partner ({route, navigation}) {
    const [PairCountry, setPairCountry] = useState('');

    const savePartner = () => {
        push(
            ref(db, 'data/'),
            { 'Partner': PairCountry });
        navigation.navigate('Done');
    }

    return (
        <View styles ={styles.root}>

            <View style={{flexDirection: 'row', justifyContent: 'space-between'}} >
                <Text 
                    style={[styles.Normal, {fontWeight: 'bold', padding: 5}]}
                    onPress={() => navigation.navigate('Studies')}
                    > ← </Text>
            </View>

            <Text style={[styles.container, styles[`container_NUMBER`]]}> 6/6 </Text>
            <Text style={[styles.container, styles[`container_TITLE`]]}> I would like to be pair with... </Text>
            <Text style={styles.QUESTION}> Someone from... </Text>
            <View style={styles.answer}>
                <Input
                    placeholder="Country"
                    value={PairCountry}
                    onChangeText={text => setPairCountry(text)}/>
            </View>

            <Button
                onPress={savePartner}
                title="Next"
                type="PRIMARY"
                color={'#5481b8'}
                style={{left: 20, right: 20, bottom: 20}}
                accessibilityLabel="Next"/>
        </View>
    );
}