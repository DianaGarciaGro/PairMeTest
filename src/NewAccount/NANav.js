import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Name from './Name';
import Gender from './Gender';
import Birthday from './Birthday';
import Nationality from './Nationality';
import Studies from './Studies';
import Partner from './Partner';
import Done from './Done';
import PagesNav from '../pages/PagesNav';
import ProfileEdit from '../pages/Profile/ProfileEdit';

const Stack = createNativeStackNavigator();

export default function NANav() {

  return (    
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Name' component={Name} />
        <Stack.Screen name='Gender' component={Gender} />
        <Stack.Screen name='Birthday' component={Birthday} />
        <Stack.Screen name='Nationality' component={Nationality} />
        <Stack.Screen name='Studies' component={Studies} />
        <Stack.Screen name='Partner' component={Partner} />
        <Stack.Screen name='Done' component={Done} />
        <Stack.Screen name='Home' component={PagesNav} />
      </Stack.Navigator>
  );
}
