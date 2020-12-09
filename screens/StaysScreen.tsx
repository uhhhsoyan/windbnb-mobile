import React, { FC, useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { CustomText, StayCardList, SearchBar } from '../components';
import stayData from '../data/stays.json';
import { Feather } from '@expo/vector-icons';
import { Stay } from '../types';

const StaysScreen: FC = () => {
  const [stays, setStays] = useState<Stay[] | null>(null);

  useEffect(() => {
    setStays(stayData);
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.logoRow}>
        <Feather name="triangle" size={22} color='#eb5757' />
        <CustomText fontFamily='Poppins' weight={700} style={styles.logoText}>windbnb</CustomText>
      </View>
      <SearchBar />
      <View style={styles.titleRow}>
        <CustomText fontFamily='Montserrat' weight={700} style={styles.titleText}>Stays in Finland</CustomText>
        <CustomText fontFamily='Montserrat' weight={500} style={styles.stayCountText}>12+ stays</CustomText>
      </View>
      {stays ? <StayCardList stays={stays}/> : null }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  logoRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'baseline',
  },
  logoText: {
    color: '#eb5757',
    fontSize: 16,
    marginLeft: 5
  },
  titleRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  titleText: {
    color: '#333333',
    fontSize: 18,
  },
  stayCountText: {
    color: '#4f4f4f',
  },
})

export default StaysScreen;