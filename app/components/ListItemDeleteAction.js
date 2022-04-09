import React from 'react';
import { View , StyleSheet, TouchableWithoutFeedback} from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons'
function ListItemDeleteAction({ onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name="trash-can" size={35} color={colors.white}></MaterialCommunityIcons>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default ListItemDeleteAction;

const styles = StyleSheet.create({
    container: {
        width: 70,
        backgroundColor: colors.danger,
        justifyContent: 'center',
        alignItems: 'center'

    }
})