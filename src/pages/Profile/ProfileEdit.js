import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import CustomButton from '../../components/CustomButton';

const updateName=()=>{
    updateProfile(auth.currentUser, {
    displayName: newName
  }).then(() => {
    setisVisible(false)
  }).catch((error) => {
    setisVisible(false)
  });
}

const ProfileEdit = ({navigation}) => {

    return (
      <View style={{flex: 1}}>
        <View style={{margin: 20}}>
            <View style={{alignItems: 'center'}}>
                <TouchableOpacity onPress={() => {}}>
                    <View style={{height: 100, width: 100, borderRadius: 15, alignSelf: 'center', marginTop: 15}}>
                        <ImageBackground
                            source={{ uri: "https://thumbs.dreamstime.com/b/default-avatar-profile-trendy-style-social-media-user-icon-187599373.jpg" }}
                            style= {{height: 100, width: 100}}
                            imageStyle= {{borderRadius: 15}}>
                                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                    <Feather
                                        name="camera" size={35} color="#fff" style={{
                                            opacity: 0.7,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderWidth: 1,
                                            borderColor: '#fff',
                                            borderRadius: 10,
                                        }}/>
                                </View>
                        </ImageBackground>
                    </View>
                </TouchableOpacity>
                <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold', alignSelf: 'center'}}> Username </Text>
            </View>
                <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 10, borderBottomWidth: 1, borderBottomColor: '#f2f2f2', paddingBottom: 5, paddingLeft: 15,}}>
                    <Feather
                        name="user"
                        color="#666666"
                        size={20}
                        paddingBottom= {5}/>
                    <TextInput 
                        placeholder='First Name' 
                        placeholderTextColor='#666666' 
                        style={{flex: 1, paddingLeft: 10, color: '#05375a'}} 
                        autoCorrect={false} />
                </View>
                <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 10, borderBottomWidth: 1, borderBottomColor: '#f2f2f2', paddingBottom: 5, paddingLeft: 15,}}>
                    <Feather
                        name="map-pin"
                        color="#666666"
                        size={20}
                        paddingBottom= {5}/>
                    <TextInput 
                        placeholder='Country' 
                        placeholderTextColor='#666666' 
                        style={{flex: 1, paddingLeft: 10, color: '#05375a'}} 
                        autoCorrect={false} />
                </View>
                <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 10, borderBottomWidth: 1, borderBottomColor: '#f2f2f2', paddingBottom: 5, paddingLeft: 15,}}>
                    <Feather
                        name="mail"
                        color="#666666"
                        size={20}
                        paddingBottom= {5}/>
                    <TextInput 
                        placeholder='Email' 
                        placeholderTextColor='#666666' 
                        keyboardType='email-address'
                        style={{flex: 1, paddingLeft: 10, color: '#05375a'}} 
                        autoCorrect={false} />
                </View>
                <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 10, borderBottomWidth: 1, borderBottomColor: '#f2f2f2', paddingBottom: 5, paddingLeft: 15,}}>
                    <Feather
                        name="linkedin"
                        color="#666666"
                        size={20}
                        paddingBottom= {5}/>
                    <TextInput 
                        placeholder='linkedin' 
                        placeholderTextColor='#666666' 
                        keyboardType='url'
                        style={{flex: 1, paddingLeft: 10, color: '#05375a'}} 
                        autoCorrect={false} />
                </View>
                <CustomButton
                    text="Save"
                    onPress={updateName}/>
        </View>
      </View>
    );
  };
  
  export default ProfileEdit;