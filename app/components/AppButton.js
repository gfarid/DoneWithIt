import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors';

function AppButton({title, onPress , color='primary' }) {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: colors[color]}]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 15,
        marginVertical: 10
    },
    text:{
        fontWeight: 'bold',
        fontSize: 18,
        color: colors.white,
        textTransform: 'uppercase',
        textAlign: 'center'
    }
})

export default AppButton;
