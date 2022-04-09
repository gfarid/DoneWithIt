import React from 'react';
import { StyleSheet, View , TouchableOpacity} from 'react-native';
import AppText from './AppText';
import Icon from './Icon';

function CategoryPickerItem({item,onPress}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
            <Icon name={item.icon} backgroundColor={item.backgroundColor} size={80}></Icon>
            </TouchableOpacity>
            <AppText style={styles.label}>{item.label}</AppText>
        </View>
    );
}

export default CategoryPickerItem;

const styles = StyleSheet.create({
    container : {
        paddingHorizontal: 25,
        paddingVertical: 15,
        alignItems: 'center',
        width: '33%'
    },
    label: {
        marginTop: 5,
        textAlign: 'center'
    }
})