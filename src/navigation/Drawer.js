import * as React from 'react';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import Home from '../Home'
import Profile from '../Profile';
import Chat from '../Chat';

const Drawer = createDrawerNavigator();

export default function openDrawer() {
    return (
        <NavigationContainer>
        <Drawer.Navigator
            drawerType="front"
            initialRouteName="Profile"
            drawerContentOptions={{
                activeTintColor: '#e91e63',
                itemStyle: { marginVertical: 10 }}}>

            <Drawer.Screen
                key={drawer.name}
                name={drawer.name}
                options={{
                drawerIcon:({focused})=>
                    drawer.iconType==='Material' ?
            <MaterialCommunityIcons
                        name={drawer.iconName}
                        size={24}
                        color={focused ? "#e91e63" : "black"}
                    />
                    :
                    drawer.iconType==='Feather' ?
            <Feather
                        name={drawer.iconName}
                        size={24}
                        color={focused ? "#e91e63" : "black"}
                    />
                    :
            <FontAwesome5
                        name={drawer.iconName}
                        size={24}
                        color={focused ? "#e91e63" : "black"}
                    />
                }}
                component={
                    drawer.name==='Home' ? Home
                      : drawer.name==='Profile' ? Profile
                        : drawer.name==='Chat' ? Chat
                          : ReferScreen
                  }
            />
        
        </Drawer.Navigator>
        </NavigationContainer>
    );
}