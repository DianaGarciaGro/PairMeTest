import React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import styles from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import openDrawer from './navigation/Drawer';

export default function Home({navigation}) {
    return (
        <View style={styles.root}>
            <Feather 
                name="menu"
                size={24}
                color="black"
                style={styles.menu}
                onPress={() => navigation.navigate(openDrawer)}
            />
            <Text style={styles.Title}>Home Screen</Text>
        </View>
    );
}
