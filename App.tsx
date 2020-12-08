import { StatusBar } from 'expo-status-bar';
import React, { FC, useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StaysScreen from './screens/StaysScreen';

export default function App() {

  return (
    <View style={styles.container}>
      <StaysScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
});
