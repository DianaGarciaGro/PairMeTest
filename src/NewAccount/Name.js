import React, {useState } from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import CustomInput from "../components/CustomInput";
import styles from "../styles";

export default function Name ({navigation}) {
    const [Name, setName] = useState('');

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
                <CustomInput
                    placeholder="First and last name"
                    value={Name}
                    setValue={setName}/>
            </View>
            </ScrollView>
        </View>
    );
}
