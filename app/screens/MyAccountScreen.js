import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';
import colors from '../config/colors';
import useAuth from '../auth/useAuth';

const menuItems= [
    {
        title: 'My Listings',
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: colors.primary
        },
        targetScreen: 'MyLstings'
    },
    {
        title: 'My Messages',
        icon: {
            name: 'email',
            backgroundColor: colors.secondary,
        },
        targetScreen: 'Messages'

    }
];

function MyAccountScreen({ navigation }) {
    const { user , logout } = useAuth();

    return (
        <Screen style={styles.screen}>
            <ListItem  
                title={user.name}
                subTitle={user.email}
                image={require('../assets/mosh.jpg')}
            />
            <View style={styles.container}>
                <FlatList 
                data={menuItems}
                keyExtractor={(menuItem)=> menuItem.title}
                ItemSeparatorComponent={ListItemSeparator}
                renderItem={({item})=> 
                <ListItem
                    title={item.title}
                    IconComponent={ <Icon 
                        name={item.icon.name}
                        backgroundColor={item.icon.backgroundColor}/>}
                        onPress = {()=>navigation.navigate(item.targetScreen) }
                />}
                />
            </View>
            <ListItem  
                title="Log out" 
                IconComponent={<Icon name="logout" backgroundColor='#ffe66d'/>}
                onPress={()=> logout()}
                /> 
            </Screen>
    );
}

export default MyAccountScreen;

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    screen: {
        backgroundColor: colors.light,
    }
})