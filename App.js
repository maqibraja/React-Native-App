import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
  return (
    <ImageBackground source={require('./assets/design.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text>Hello Aqib Raja</Text>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.5)', // Optional: Add a semi-transparent white background
    alignItems: 'center',
    justifyContent: 'center',
  },
});