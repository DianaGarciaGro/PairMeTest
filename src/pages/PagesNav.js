import { createBottomTabNavigator } from'@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons';
import Home from './Home';
import ProfileStack from './Profile/ProfileStack';
import MessagesStack from './Chat/MessagesStack';

const Tab = createBottomTabNavigator();

const PagesNav = ({route}) => {
  
  return (
    
    <Tab.Navigator screenOptions={({route }) => ({ 
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') { 
              iconName = 'home';            
            } else if (route.name === 'Messages') {  
                iconName = 'message-square';
            } else if (route.name === 'Profile') {
                iconName = 'user';
            }
        return <Feather name={iconName} size={size} color={color} />;
        },
    })}>

        <Tab.Screen name="Home"component={Home} options={{ headerShown: false }}/>
        <Tab.Screen name="Messages"component={MessagesStack} options={{headerShown: false, tabBarHideOnKeyboard:true }}/>
        <Tab.Screen name="Profile" component={ProfileStack} options={{ headerShown: false }}/>

    </Tab.Navigator>
  );
}

export default PagesNav;