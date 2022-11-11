import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Card, Button } from '@rneui/themed';
import { Feather } from '@expo/vector-icons';
import styles from '../styles';

export default function Home () {
  return (
      <ScrollView>
        <View style={styles.root}>
          <Card>
            <Card.Title>HELLO WORLD</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{ padding: 0 }}
              source={{uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg'}}/>
            <Text style={{ marginBottom: 10 }}>
              The idea with React Native Elements is more about component
              structure than actual design.
            </Text>
            <Button 
              buttonStyle={styles.buttonCard} 
              title="Know More"
              onPress={() => navigation.navigate('Profile')}/>
            <View style={styles.rowIcon}>
              <Feather
                name= 'x-circle' 
                size= {30} 
                color= 'red'/>
              <Feather
                name= 'check-circle' 
                size= {30} 
                color= 'green'/>
            </View>
          </Card>
        </View>
      </ScrollView>
  );
};