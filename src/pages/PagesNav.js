import { createBottomTabNavigator } from'@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons';
import Chat from './Chat';
import Profile from './Profile';
import Home from './Home';

const Tab = createBottomTabNavigator();

export default function PagesNav() {

  return (
    
    <Tab.Navigator screenOptions={({route }) => ({ 
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') { 
              iconName = 'home';            
            } else if (route.name === 'Chat') {  
                iconName = 'message-square';
            } else if (route.name === 'Profile') {
                iconName = 'user';
            }
        return <Feather name={iconName} size={size} color={color} />;
        },
    })}>

        <Tab.Screen name="Home"component={Home} options={{ headerShown: false, tabBarHideOnKeyboard:true }}/>
        <Tab.Screen name="Chat"component={Chat} options={{ headerShown: false, tabBarHideOnKeyboard:true }}/>
        <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false, tabBarHideOnKeyboard:true }}/>

    </Tab.Navigator>

  


  );
}