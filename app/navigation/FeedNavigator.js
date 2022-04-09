import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';

const Stack = createNativeStackNavigator();


export default FeedNavigator = ()=>{
    return (
      <Stack.Navigator screenOptions={{ presentation : 'modal' ,headerShown: false}}>
        <Stack.Screen name="Home" component={ListingsScreen}  />
        <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
    </Stack.Navigator>
    );

  }