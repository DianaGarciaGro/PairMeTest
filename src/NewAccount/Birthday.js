import React, {useState } from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import CustomInput from "../components/CustomInput";
import styles from "../styles";

export default function Birthday ({navigation}) {
    const [Birthday, setBirthday] = useState('');

    return (
        <View styles ={styles.root}>

            <View style={{flexDirection: 'row', justifyContent: 'space-between'}} >
                <Text 
                    style={[styles.Normal, {fontWeight: 'bold', padding: 5}]}
                    onPress={() => navigation.navigate('Gender')}
                    > ← </Text>
                <Text 
                    style={[styles.Normal, {fontWeight: 'bold', paddingEnd: 12}]}
                    onPress={() => navigation.navigate('Nationality')}> → </Text>
            </View>


            <ScrollView style={styles.scrollView}>
            <Text style={[styles.container, styles[`container_NUMBER`]]}> 3/6 </Text>
            <Text style={styles.QUESTION}> When do we celebrate your Birthday? </Text>
            <View style={styles.answer}>
                <CustomInput
                    placeholder=" DD/MM/YYYY " 
                    value={Birthday}
                    setValue={setBirthday}/>
            </View>
            </ScrollView>
        </View>
    );
}
