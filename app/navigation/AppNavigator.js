
 import React from 'react';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListingEditScreen from '../screens/ListingEditScreen';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import NewListingButton from './NewListingButton';
import useNotifications from '../hooks/useNotifications';
import navigation from './rootNavigation';

const Tab = createBottomTabNavigator();

export default AppNavigator = ()=> {
    useNotifications((notification)=>{
      navigation.navigate('Account');
    });
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: true
      })}
      >
        <Tab.Screen name="Feed" component={FeedNavigator} options={{ tabBarIcon: ({color, size})=> <MaterialCommunityIcons name="home" size={size} color={color}/>}}/>
        <Tab.Screen name="Edit" component={ListingEditScreen} options={({navigation})=> ({ tabBarButton : ()=> <NewListingButton onPress={ ()=> navigation.navigate('Edit')}/>})} />
        <Tab.Screen name="Account" component={AccountNavigator} options={{ tabBarIcon: ({color, size})=> <MaterialCommunityIcons name="account" size={size} color={color}/>}}/>
      </Tab.Navigator>
    )
  }