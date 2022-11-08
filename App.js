import React from 'react';
import Register from './src/Register';
import Start from './src/Start';
import ForgotPassword from './src/ForgotPassword';

import Home from './src/Home';
import Profile from './src/Profile';
import Chat from './src/Chat';

import Name from './src/NewAccount/Name';
import Gender from './src/NewAccount/Gender';
import Nationality from './src/NewAccount/Nationality';
import Birthday from './src/NewAccount/Birthday';
import Studies from './src/NewAccount/Studies';
import Partner from './src/NewAccount/Partner';
import Done from './src/NewAccount/Done';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Start" component={Start} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Chat" component={Chat} />

            <Stack.Screen name="Name" component={Name} />
            <Stack.Screen name="Gender" component={Gender} />
            <Stack.Screen name="Nationality" component={Nationality} />
            <Stack.Screen name="Birthday" component={Birthday} />
            <Stack.Screen name="Studies" component={Studies} />
            <Stack.Screen name="Partner" component={Partner} />
            <Stack.Screen name="Done" component={Done} />

        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
