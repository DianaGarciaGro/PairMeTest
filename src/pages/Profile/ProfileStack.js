import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileEdit from './ProfileEdit';
import Profile from './Profile';
import { Feather } from '@expo/vector-icons';
import DianaGarcia from './DianaGarcia';

const Stack = createNativeStackNavigator();

export default function ProfileStack ({navigation}) {

  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#fff', elevation: 0 }, headerTintColor: '#000' }}>
        <Stack.Screen name="Profile" component={Profile} 
          options={{ 
            title: '', 
            headerRight: () => (
              <Feather
                name='edit'
                size={25}
                color='black'
                onPress={() => navigation.navigate('ProfileEdit')}
                />
            )
            }}/>
        <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
        <Stack.Screen name="DianaGarcia" component={DianaGarcia} />
    </Stack.Navigator>
  );
};