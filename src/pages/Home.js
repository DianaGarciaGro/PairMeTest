import React from 'react';
import { ScrollView } from 'react-native';
import Cards from '../components/cards';

export default function Home ({cards, navigation}) {

  return (
      <ScrollView>
          <Cards/>
      </ScrollView>
  );
};