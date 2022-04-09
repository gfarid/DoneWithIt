import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';
import {Image} from "react-native-expo-image-cache";


function Card({title='Title' , subTitle='SubTitle' , imageUrl , onPress , thumbnailUrl}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.card}>
            <Image uri={imageUrl} style={styles.image}/>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
        </TouchableWithoutFeedback>
    );
}

export default Card;


const styles = StyleSheet.create({
    card:{
        borderRadius: 15,
        backgroundColor:'#fff',
        marginBottom: 20,
        overflow: 'hidden'
    },
    image: {
        width:'100%',
        height: 200
    },
    title:{
        marginBottom: 7
    },
    subTitle:{
        color: colors.secondary,
        fontWeight: 'bold'
    },
    detailsContainer: {
        padding: 20
    }
})