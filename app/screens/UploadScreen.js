import { Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from '../components/AppText'
import * as Progress from 'react-native-progress';
import colors from '../config/colors';
import LottieView from 'lottie-react-native';


export default function UploadScreen({ progress =0 , visible= false, onDone }) {
  return (
    <Modal visible={visible}>
        <View style={styles.container}>
            { progress < 1 ? 
                <Progress.Bar progress={progress} width={200} color={colors.primary}/> : 
                <LottieView 
                    autoPlay 
                    loop={false} 
                    onAnimationFinish={onDone}
                    source={require('../assets/animations/done.json')}
                    style={styles.animation}
                     />
            }
        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    animation: {
        width: 150
    },
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    }
})