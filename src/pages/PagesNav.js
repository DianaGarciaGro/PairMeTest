import { createBottomTabNavigator } from'@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons';
import Home from './Home';
import ProfileStack from './Profile/ProfileStack';
import Chat from './Chat';

const Tab = createBottomTabNavigator();

const PagesNav = ({route}) => {

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
        <Tab.Screen name="Profile" component={ProfileStack} options={{ headerShown: false, tabBarHideOnKeyboard:true }}/>

    </Tab.Navigator>
  );
}

export default PagesNav;