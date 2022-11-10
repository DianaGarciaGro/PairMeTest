import React, { useState } from "react";
import { Text, View } from "react-native";
import styles from "../styles";
import { CheckBox } from "@rneui/base";
import { Button } from "@rneui/base";
import { push, ref } from "firebase/database";
import { db } from "../config/firebase";

//Add multiple choice

export default function Gender ({navigation}) {

    const [Female, setFemale] = useState(false);
    const [Male, setMale] = useState(false);
    const [Other, setOther] = useState(false);
    const Gender = []

    const genderFemale = () => {
        setFemale(true);
        setMale(false);
        setOther(false);
        () => setFemale(!Female);
    }
    const genderMale = () => {
        setFemale(false);
        setMale(true);
        setOther(false);
        () => setMale(!Male);
    }
    const genderOther = () => {
        setFemale(false);
        setMale(false);
        setOther(true);
        () => setMale(!Other);
    }

    const saveGender = () => {
        if(Female === true){
            Gender.push("female")
        }
        if(Male === true){
            Gender.push("Male")
        }
        if(Other === true){
            Gender.push("Other")
        }
        push(
            ref(db, 'data/'),
            { 'Gender': Gender });
        navigation.navigate('Birthday');
    }

    return (
        <View styles ={styles.root}>

            <View style={{flexDirection: 'row', justifyContent: 'space-between'}} >
                <Text 
                    style={[styles.Normal, {fontWeight: 'bold', padding: 5}]}
                    onPress={() => navigation.navigate('Name')}
                    > ← </Text>
            </View>

            <Text style={[styles.container, styles[`container_NUMBER`]]}> 2/6 </Text>
            <Text style={styles.QUESTION}> Select your Gender </Text>
            <View style={styles.answer}>
                <CheckBox
                    center
                    title='Female'
                    checked={Female}
                    checkedColor='#5481b8'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    onPress={genderFemale}/>
                <CheckBox
                    center
                    title='Male'
                    checked={Male}
                    checkedColor='#5481b8'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    onPress={genderMale}/>
                <CheckBox
                    center
                    title='Prefer not to say'
                    checked={Other}
                    checkedColor='#5481b8'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    onPress={genderOther}/>
            </View>

            <Button
                onPress={saveGender}
                title="Next"
                type="PRIMARY"
                color={'#5481b8'}
                style={{left: 20, right: 20, bottom: 20}}
                accessibilityLabel="Next"/>
        </View>
    );
}

