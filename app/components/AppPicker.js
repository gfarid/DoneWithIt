import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { StyleSheet, View, TouchableWithoutFeedback, Modal, Button, FlatList} from 'react-native';
import defaultStyles from '../config/styles';
import AppText from './AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';

function AppPicker({icon , items , placeholder , selectedItem, onSelectItem , width='100%' , PickerItemComponent = PickerItem, numberOfColumns=1}) {
    const [modalVisible , setModalVisible ] = useState(false);
    return (
        <>
            <TouchableWithoutFeedback onPress={()=> setModalVisible(true)}>
            <View style={[styles.container , {width}]}>
                {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon}/>}
                {selectedItem ? (<AppText style={styles.text}>{selectedItem.label}</AppText>) : (<AppText style={styles.placeholder}>{placeholder}</AppText>) } 
                <MaterialCommunityIcons name='chevron-down' size={20} color={defaultStyles.colors.medium}/>
            </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType='slide'>
                <Screen>
                    <Button title="Close" onPress={()=> setModalVisible(false)}></Button>
                    <FlatList 
                    data={items}
                    numColumns={numberOfColumns}
                    keyExtractor={item => item.value.toString()}
                    renderItem={({item}) => 
                        <PickerItemComponent  
                       item={item}
                        onPress={()=> {
                            setModalVisible(false);
                            onSelectItem(item);
                        }}/>
                    }/>
                </Screen>
            </Modal>
        </>
    );
}

export default AppPicker;

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    },
    text: {
        flex: 1
    },
    placeholder: {
        flex:1,
        color: defaultStyles.colors.medium
    }
})