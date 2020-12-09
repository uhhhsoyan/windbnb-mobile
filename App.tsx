//import { StatusBar } from 'expo-status-bar';
import React, { FC, useState, useEffect } from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import StaysScreen from './screens/StaysScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StaysScreen />
      <StatusBar barStyle='dark-content' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
});
