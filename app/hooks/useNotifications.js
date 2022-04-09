import React, { useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import expoPushTokens from '../api/expoPushTokens';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default useNotifications = (notificationListener)=> {
    useEffect(()=>{
        registerForPushNotifications();
    
        Notifications.addNotificationResponseReceivedListener(notificationListener);
      },[]);
    
      const registerForPushNotifications = async ()=> {
            try {
            const persmission = await Notifications.getPermissionsAsync();
            if(!persmission.granted) return ;
      
           const token =  await Notifications.getExpoPushTokenAsync();
           expoPushTokens.register(token.data); 
          }
        catch (error) {
          console.log('Error getting a push token!', error);
        }
      }
}