import React from 'react';
import styles from './styles';

import { View, Text } from 'react-native';

export default function Home() {
    return (
        <View style={styles.root}>
            <Text style={styles.Title}> Home Page </Text>
        </View>
    );
}