import React from 'react';
import { View, StyleSheet, Platform, KeyboardAvoidingView} from 'react-native';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import colors from '../config/colors';
import {Image} from "react-native-expo-image-cache";
import ContactSellerForm from '../components/ContactSellerForm';


function ListingDetailsScreen({ route}) {
    const listing = route.params;
    return (
        <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}>
            <Image uri={listing.images[0].url} style={styles.image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{listing.title}</AppText>
                <AppText style={styles.price}>{listing.price}</AppText>
                <View style={styles.userContainer}>
                <ListItem
                    image={require('../assets/mosh.jpg')}
                    title="Mosh Hamedani"
                    subTitle="5 Listing"
                />
                </View>
                <ContactSellerForm listing={listing} />
            </View>
        </KeyboardAvoidingView>
    );
}

export default ListingDetailsScreen;


const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    detailsContainer: {
        padding: 20,

    },
    title: {
        fontSize: 24,
        fontWeight: '500'
    },
    price: {
        color: colors.secondary,
        fontSize: 20,
        marginVertical: 10,
        fontWeight: 'bold'
    },
    userContainer:{
        marginVertical: 40
    }
})