import React, { FC, useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { StayCardList, SearchBar, StayCard } from '../components';
import stayData from '../data/stays.json';
import { Stay } from '../types';

const StaysScreen: FC = () => {
  const [stays, setStays] = useState<Stay[] | null>(null);

  useEffect(() => {
    setStays(stayData);
    console.log(stays)
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.logoRow}>

      </View>
      <SearchBar />
      <View style={styles.titleRow}>
        <Text style={styles.titleText}>Stays in Finland</Text>
        <Text style={styles.stayCountText}>12+ stays</Text>
      </View>
      {stays ? <StayCardList stays={stays}/> : null }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    borderColor: 'blue',
    borderWidth: 2
  },
  logoRow: {

  },
  titleRow: {

  },
  titleText: {

  },
  stayCountText: {

  },
})

export default StaysScreen;