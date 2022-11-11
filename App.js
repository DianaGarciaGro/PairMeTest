import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { auth } from './src/config/firebase';
import PagesNav from './src/pages/PagesNav';
import LogInNav from './src/login/LogInNav';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <SafeAreaProvider>
      <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Sign in' component={LogInNav} />
            <Stack.Screen name='Register' component={PagesNav} />
          </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
  );
}
