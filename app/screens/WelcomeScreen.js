import React from 'react';
import { ImageBackground, StyleSheet, Text ,Image, View} from 'react-native';
import AppButton from '../components/AppButton';

import colors from '../config/colors';
function WelcomeScreen({ navigation}) {
    return (
        <ImageBackground source={require("./../assets/background.jpg")} style={styles.background} blurRadius={10}>
            <View style={styles.logoWrapper}>
                <Image source={require('../assets/logo-red.png')} style={styles.logo}/>
                <Text style={styles.tagline}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton title="Login" onPress={()=> navigation.navigate('Login')}/>
                <AppButton title="Register" color='secondary' onPress={()=> navigation.navigate('Register')}/>
            </View>
        </ImageBackground>
    );
}

export default WelcomeScreen;


const styles = StyleSheet.create({
    background : {
        flex:1,
        justifyContent: 'flex-end',
        alignItems:'center',
    },
    logo: {
        width:50,
        height:50,
    },
    logoWrapper : {
        position:'absolute',
        top: 100,
        alignItems:'center'
    },
    buttonsContainer:{
        width:'100%',
        padding: 20
    },
    tagline:{
        paddingVertical: 10,
        fontSize:18,
        fontWeight: '600'
    }
})