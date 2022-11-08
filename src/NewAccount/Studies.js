import React, {useState } from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import CustomInput from "../components/CustomInput";
import styles from "../styles";

export default function Studies ({route, navigation}) {
    const [Bachelors, setBachelors] = useState('');

    return (
        <View styles ={styles.root}>

            <View style={{flexDirection: 'row', justifyContent: 'space-between'}} >
                <Text 
                    style={[styles.Normal, {fontWeight: 'bold', padding: 5}]}
                    onPress={() => navigation.navigate('Nationality')}
                    > ← </Text>
                <Text 
                    style={[styles.Normal, {fontWeight: 'bold', paddingEnd: 12}]}
                    onPress={() => navigation.navigate('Partner')}> → </Text>
            </View>

            <ScrollView style={styles.scrollView}>
            <Text style={[styles.container, styles[`container_NUMBER`]]}> 5/6 </Text>
            <Text style={styles.QUESTION}> What's your Bachelor? </Text>
            <View style={styles.answer}>
                <CustomInput
                    placeholder=" Bachelor's Degree "
                    value={Bachelors}
                    setValue={setBachelors}/>
            </View>
            </ScrollView>
        </View>
    );
}