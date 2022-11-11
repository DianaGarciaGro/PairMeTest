import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Register from './Register';
import Start from './Start';
import NANav from '../NewAccount/NANav';
import PagesNav from '../pages/PagesNav';

const Stack = createNativeStackNavigator();

export default function LogInNa() {

  return (    
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Sign in' component={Start} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='New Account' component={NANav} />
        <Stack.Screen name='Home' component={PagesNav} />
      </Stack.Navigator>
  );
}
