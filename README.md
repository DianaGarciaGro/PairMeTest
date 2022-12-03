# PairMeTest
Video demonstration of point of view in the phone and code explanation in VisualStudio: https://photos.app.goo.gl/zjK5gmirzGZa4iZC9

Description of some of the technologies used:
@rneui/base
  {Avatar} for each profile created
  {SearchBar} for looking for a specific chat at the message page

@rneu/themed
  {Cards} for the home page
  {Text} for differents things to specify to the user
  {Button} for passing to next part
  {Input} for adding information that the user gives us
  {ListItem} for Message screen
  
@expo/vector-icons {Feather}
  For style and good user experience
  
expo-image-picker
    If user wants to edit his profile picture
    
firebase
  For storing and pulling the data of the user, also added the authentication to make sure is a user registerd
  
@react-navigation/native-stack
  {createNativeStackNavigator} for navigate between first pages of Log in and Register
  {createBottomTabNavigator} for navigate inside the app when user is already log in
  
react-native
  Used a lot of different features such as FlatList, Image, StyleSheet, Text, View, Dimensions, Alert, etc.
  
react
  Some of the features used are React, useState, useEffect, useCallback, etc.
  
react-native-gifted-chat
  Implemented for the chat function calling features like Bubble, GiftedChat, Send.
