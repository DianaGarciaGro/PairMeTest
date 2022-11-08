import React, {useState } from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import CustomInput from "../components/CustomInput";
import styles from "../styles";

export default function Partner ({route, navigation}) {
    const [PairCountry, setPairCountry] = useState('');

    return (
        <View styles ={styles.root}>

            <View style={{flexDirection: 'row', justifyContent: 'space-between'}} >
                <Text 
                    style={[styles.Normal, {fontWeight: 'bold', padding: 5}]}
                    onPress={() => navigation.navigate('Studies')}
                    > ← </Text>
                <Text 
                    style={[styles.Normal, {fontWeight: 'bold', paddingEnd: 12}]}
                    onPress={() => navigation.navigate('Done')}> → </Text>
            </View>

            <ScrollView style={styles.scrollView}>
            <Text style={[styles.container, styles[`container_NUMBER`]]}> 6/6 </Text>
            <Text style={[styles.container, styles[`container_TITLE`]]}> I would like to be pair with... </Text>
            <Text style={styles.QUESTION}> Someone from... </Text>
            <View style={styles.answer}>
                <CustomInput
                    placeholder="Country"
                    value={PairCountry}
                    setValue={setPairCountry}/>
            </View>
            </ScrollView>
        </View>
    );
}