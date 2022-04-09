import React from 'react';
import { Image, View , StyleSheet, TouchableHighlight} from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons'
function ListItem({ image, IconComponent , title,subTitle, onPress, renderRightActions}) {
    return (
    <Swipeable renderRightActions={renderRightActions}>
    <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
       <View style={styles.container}>
           {IconComponent}
           { image && <Image style={styles.image} source={image}/>}
           <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
           </View>
           <MaterialCommunityIcons color={colors.medium}  name='chevron-right' size={25}></MaterialCommunityIcons>
       </View>
    </TouchableHighlight>
    </Swipeable>    
    );
}

export default ListItem;


const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
        backgroundColor: colors.white
    },
    detailsContainer: {
        justifyContent: 'center',
        marginLeft: 10,
        flex: 1
    },
    image:{
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    title:{
        fontWeight: '500'
    },
    subTitle: {
        color: colors.medium
    }
})