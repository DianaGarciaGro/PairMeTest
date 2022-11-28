import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { ListItem } from "@rneui/themed";

const MessagesData = [
	{
		id: '1',
		userName: 'Diana Garcia',
		userImg: {uri: 'https://img.freepik.com/premium-vector/african-american-woman-avatar-with-glasses-portrait-young-girl-vector-illustration-face_217290-363.jpg?w=2000'},
		messageTime: '4 mins ago',
		messageText: 'Hey there, this is my test for a post in my social app in React Native.'
	},
	{
		id: '2',
		userName: 'George Roberts',
		userImg: {uri: 'https://static.vecteezy.com/system/resources/previews/004/476/164/original/young-man-avatar-character-icon-free-vector.jpg'},
		messageTime: '2 hours ago',
		messageText: 'Hey there, this is my test for a post in my social app in React Native.'
	},
	{
		id: '3',
		userName: 'Alexander Aiken',
		userImg: {uri: 'https://image.shutterstock.com/image-vector/young-man-avatar-character-260nw-661669825.jpg'},
		messageTime: '1 hours ago',
		messageText: 'Hey there, this is my test for a post in my social app in React Native.'
	},
	{
		id: '4',
		userName: 'Mina Barrington',
		userImg: {uri: 'https://as2.ftcdn.net/v2/jpg/02/79/66/93/1000_F_279669366_Lk12QalYQKMczLEa4ySjhaLtx1M2u7e6.jpg'},
		messageTime: '1 day ago',
		messageText: 'Hey there, this is my test for a post in my social app in React Native.'
	},
	{
		id: '5',
		userName: 'Christy Alex',
		userImg: {uri: 'https://thumbs.dreamstime.com/b/man-profile-cartoon-smiling-vector-illustration-graphic-design-135443492.jpg'},
		messageTime: '2 days ago',
		messageText: 'Hey there, this is my test for a post in my social app in React Native.'
	},
];

const listSeparator = () => {
    return (
        <View
            style={{
                height: 3,
                width: "90%",
                backgroundColor: "#CED0CE",
                marginLeft: "5%",
            }}
        />
    );
};

export default function CardText ({navigation}) {
    return(
        <FlatList
            data={MessagesData}
            keyExtractor={item =>item.id}
            renderItem={({item}) => (
                <ListItem
                    TouchableOpacity={true}
                    onPress={() => navigation.navigate('Chat')}>
                    <View style={{flexDirection: 'row', marginRight: 100}}>
                        <View>
                            <Image source={item.userImg} style={style.UserImg}/>
                        </View>
                        <View >
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Text style={style.UserName}>{item.userName}</Text>
                                <Text style={style.PostTime}>{item.messageTime}</Text>
                            </View>
                            <View>
                                <Text style={style.MessageText}>{item.messageText}</Text>
                            </View>
                        </View>
                    </View>
                </ListItem>
        )}/>
    )
};

const style = StyleSheet.create({
    Container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    Card: {
        width: '100%'
    },
    UserInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    UserImgWrapper: {
        paddingTop: 15,
        paddingBottom: 15,
    },
    UserImg: {
        width: 60,
        height: 60,
        borderRadius: 25,
    },
    TextSection: {
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 15,
        paddingLeft: 0,
        marginLeft: 10,
        width: 300,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    UserInfoText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
    },
    UserName: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Roboto'
    },
    PostTime: {
        fontSize: 12,
        color: '#666666',
        fontFamily: 'Roboto'
    },
    MessageText: {
        fontSize: 14,
        color: '#333333'
    }
});
