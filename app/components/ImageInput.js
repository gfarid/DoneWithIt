import React, { useEffect } from 'react';
import { Alert, Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker';
import colors from '../config/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function ImageInput({imageUri , onChangeImage}) {

    useEffect(()=> {
      requestPermission();
    }, []);

    const requestPermission = async ()=> {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync();
            if(!granted){
                alert('You need to enable permission to access the libarary!');
        }
    };
    

    const selectImage = async()=> {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5
            });
            if(!result.cancelled){
                onChangeImage(result.uri);
            }
        } catch (error) {
            console.log('Error reading an image' , error);
        }
    };

    const handlePress = ()=> {
        if(!imageUri){
            selectImage();
        }
        else{
            Alert.alert('Delete' ,'are you sure you want to delete this image?',[
                { text: 'Yes' , onPress: ()=> onChangeImage(null)},
                { text: 'No'}
            ]
            );
        }
    };

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                { !imageUri && <MaterialCommunityIcons name='camera' size={40} color={colors.medium} onPress={selectImage}></MaterialCommunityIcons>}
                {imageUri && <Image source={{uri: imageUri}} style={styles.image}></Image>}
            </View>
        </TouchableWithoutFeedback>
    );
}


const styles = StyleSheet.create({
  container: {
      alignItems: 'center',
      backgroundColor: colors.light,
      borderRadius: 15,
      height: 100,
      width: 100,
      justifyContent: 'center',
      overflow: 'hidden'
  },

  image: {
      width:'100%',
      height:'100%'
  }
});

export default ImageInput;

