import React, {useState } from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import CustomInput from "../components/CustomInput";
import styles from "../styles";

//Add multiple choice

export default function Gender ({navigation}) {
    const [Gender, setGender] = useState("");

    return (
        <View styles ={styles.root}>

            <View style={{flexDirection: 'row', justifyContent: 'space-between'}} >
                <Text 
                    style={[styles.Normal, {fontWeight: 'bold', padding: 5}]}
                    onPress={() => navigation.navigate('Name')}
                    > ← </Text>
                <Text 
                    style={[styles.Normal, {fontWeight: 'bold', paddingEnd: 12}]}
                    onPress={() => navigation.navigate('Birthday')}> → </Text>
            </View>

            <Text style={[styles.container, styles[`container_NUMBER`]]}> 2/6 </Text>
            <Text style={styles.QUESTION}> Select your Gender </Text>
            <View style={styles.answer}>
                <CustomInput
                    placeholder=" Female/Male/Other "
                    value={Gender}
                    setValue={setGender}/>
            </View>
        </View>
    );
}

