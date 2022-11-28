import { Feather } from "@expo/vector-icons";
import React, {useState, useEffect, useCallback} from "react";
import { View } from "react-native";
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat'

const Chat = ({navigation, route}) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
      setMessages([
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
        {
          _id: 2,
          text: 'Hello world',
          createdAt: new Date(),
          user: {
            _id: 1,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        }
      ])
    }, [])
  
    const onSend = useCallback((messages = []) => {
      setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    const renderBubble = (props) => {
      return (
        <Bubble {...props}
          wrapperStyle={{
            right: {
              backgroundColor: '#5481b8'
            }
          }}
          textStyle={{
            right: {
              color: '#fff'
            }
          }}/>
      );
    }

    const renderSend = (props) => {
        return (
            <Send {...props}>
                <View>
                    <Feather 
                        name="send"
                        size={28}
                        color="#5481b8" 
                        style={{marginBottom: 5, marginRight: 5}}/>
                </View>
            </Send>
        )
    }
    const scrollToBottomComponent = () => { 
      return (
        <Feather
          name="chevrons-down"
          size={22}
          color="#5481b8"/>
      )
    }

    return (
        <GiftedChat
          messages={messages}
          onSend={messages => onSend(messages)}
          user={{
            _id: 1,
          }}
          renderBubble={renderBubble}
          alwaysShowSend
          renderSend={renderSend}
          scrollToBottom
          scrollToBottomComponent={scrollToBottomComponent}
        />
    );
};

export default Chat;