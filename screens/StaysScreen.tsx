import React, { FC, useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { StayCardList, SearchBar } from '../components';
import stayData from '../data/stays.json';
import { Stay } from '../types';

const StaysScreen: FC = () => {
  const [stays, setStays] = useState<Stay[]>([]);

  useEffect(() => {
    setStays(stayData);
  })

  return (
    <View style={styles.container}>
      <View style={styles.logoRow}>

      </View>
      <SearchBar />
      <View style={styles.titleRow}>
        <Text style={styles.titleText}>Stays in Finland</Text>
        <Text style={styles.stayCountText}>12+ stays</Text>
      </View>
      <ScrollView style={styles.listContainer}>
        <StayCardList />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  logoRow: {

  },
  titleRow: {

  },
  titleText: {

  },
  stayCountText: {

  },
  listContainer: {

  }
})

export default StaysScreen;