import React from "react";
import { Alert, Keyboard } from 'react-native';
import messageApi from '../api/messages';
import * as Notifications from 'expo-notifications';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import * as Yup from "yup";

function ContactSellerForm({ listing }){
    const handleSubmit = async ({message},{ resetForm})=>{
            Keyboard.dismiss();

            const result = await messageApi.send(message , listing.id);
            if(!result.ok){
                console.log('Error', result);
                return Alert.alert('Error' , 'could not send the message to the seller!');
            }
    
            resetForm();
            sendLocalNotification(0);
    }

    const sendLocalNotification = (delay) => Notifications.scheduleNotificationAsync({
        content: {
            title: "Awesome!",
            body: "Your message was sent to the seller.",
        },
        trigger:  delay == '' ? null : {seconds: delay}
      });


    return (
        <AppForm
          initialValues={{ message: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <AppFormField
            maxLength={255}
            multiline
            name="message"
            numberOfLines={3}
            placeholder="Message..."
          />
          <SubmitButton title="Contact Seller" />
        </AppForm>
      );
}
    
const validationSchema = Yup.object().shape({
    message: Yup.string().required().min(1).label("Message"),
});
    

export default ContactSellerForm