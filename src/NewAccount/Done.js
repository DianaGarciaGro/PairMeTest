import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import styles from '../styles';

export default function Done({ navigation }) {
    return (
        <View style={styles.root}>
        <Text style={[styles.Title, {paddingTop: 180}]}> Congrats!</Text>
        <Text style={styles.QUESTION}>You are all set </Text>
        <Text style={styles.QUESTION}>Ready to start?</Text>
        <Button
            style={[styles.Button, {justifyContent: 'space-between'}]}
            title="   YES!   "
            color="#5481b8"
            onPress={() => navigation.replace('Home')}
        />
        </View>
    );
    }