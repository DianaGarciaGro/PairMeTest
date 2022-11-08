import React, {useState } from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import CustomInput from "../components/CustomInput";
import styles from "../styles";

export default function Nationality ({route, navigation}) {
    const [Country, setCountry] = useState('');

    return (
        <View styles ={styles.root}>

            <View style={{flexDirection: 'row', justifyContent: 'space-between'}} >
                <Text 
                    style={[styles.Normal, {fontWeight: 'bold', padding: 5}]}
                    onPress={() => navigation.navigate('Birthday')}
                    > ← </Text>
                <Text 
                    style={[styles.Normal, {fontWeight: 'bold', paddingEnd: 12}]}
                    onPress={() => navigation.navigate('Studies')}> → </Text>
            </View>

            <ScrollView style={styles.scrollView}>
            <Text style={[styles.container, styles[`container_NUMBER`]]}> 4/6 </Text>
            <Text style={styles.QUESTION}> What's your Nationality? </Text>
            <View style={styles.answer}>
                <CustomInput
                    placeholder=" Country "
                    value={Country}
                    setValue={setCountry}/>
            </View>
            </ScrollView>
        </View>
    );
}