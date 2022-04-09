import React , { useState} from 'react';
import { FlatList } from 'react-native';
import ListItem from '../components/ListItem';
import * as Device from 'expo-device';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import Screen from '../components/Screen';

const initialMessages= [
    {
        id:1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/mosh.jpg')
    },
    {
        id:2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/mosh.jpg')
    }
];


function MessagesScreen(props) {

    const [messages , setMessages] = useState(initialMessages)
    const [refreshing , setRefreshing] = useState(false);

    const handleDeleteMsg = (msg)=> {
        setMessages(messages.filter((m) => m.id !== msg.id));
    }

    return (
        <Screen>
            <FlatList 
             data={messages}
             keyExtractor={message => message.id.toString()}
             renderItem={({ item })=> 
                 <ListItem
                 title={item.title}
                 subTitle={item.description}
                 image={item.image}
                 onPress={()=> console.log(`item selected `, item)}
                 renderRightActions={ ()=> <ListItemDeleteAction onPress={()=> handleDeleteMsg(item)}/>}/>}
             ItemSeparatorComponent={ ListItemSeparator }
             refreshing={refreshing}
             onRefresh={()=> setMessages([
                 {
                     id:2,
                     title: 'T2',
                     description: 'D2',
                     image: require('../assets/mosh.jpg')
                 }
             ])}
         />
        </Screen>
    );
}

export default MessagesScreen;