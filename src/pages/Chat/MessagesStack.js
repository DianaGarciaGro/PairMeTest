import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chat from './Chat';
import Messages from './Messages';
import { Feather } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

export default function ProfileStack ({navigation}) {

  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#fff', elevation: 0 }, headerTintColor: '#000' }}>
        <Stack.Screen name="Messages" component={Messages} 
            options={{title: 'Messages', headerTitleAlign: 'center'}}/>
        <Stack.Screen name="Chat" component={Chat} 
            options={({route}) => ({
              title: route.params.userName
            })}/>
    </Stack.Navigator>
  );
};