import React from 'react'
import LottieView from 'lottie-react-native';
import { StyleSheet, View } from 'react-native';

export default function ActivityIndicator({visible =false}) {
    if(!visible) return null
  return (
    <View style={styles.overlay}>
      <LottieView autoPlay loop source={require('../assets/animations/loader.json')} />
    </View>
  )
  
}

  const styles = StyleSheet.create({
    overlay: {
      width:'100%',
      height: '100%',
      backgroundColor: 'white',
      position: 'absolute',
      zIndex: 1,
      opacity: 0.8
    }
  });

