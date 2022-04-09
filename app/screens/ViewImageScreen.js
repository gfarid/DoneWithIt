import React from 'react';
import { Image ,SafeAreaView,StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
function ViewImageScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name='close'  size={35} color='white'/>
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name='trash-can-outline' size={35} color='white'/>
            </View>
            <Image source={require('../assets/chair.jpg')} style={styles.image}/>
        </SafeAreaView>
    );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.black
        
    },
    image: {
        resizeMode: 'contain',
        width:'100%',
        height:'100%'
    },
    closeIcon:{
        position:'absolute',
        left:30,
        top:40
    },
    deleteIcon: {
        position:'absolute',
        right:30,
        top:40
    }
})