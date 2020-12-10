import React, { FC, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import SearchModal from './SearchModal';
import { CustomText, StayCardList, SearchBar } from '../components';
import stayData from '../data/stays.json';
import { Feather } from '@expo/vector-icons';
import { Stay, Filter } from '../types';

const StaysScreen: FC = () => {
  const [stays, setStays] = useState<Stay[]>([]);
  const [filter, setFilter] = useState<Filter>({ location: { city: null, country: 'Finland'}, adults: 0, children: 0 });
  const [filteredStays, setFilteredStays] = useState<Stay[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [focused, setFocused] = useState<string>('guests');
  
  useEffect(() => {
    setStays(stayData);
    setFilteredStays(stayData);
  }, [])

  useEffect(() => {
    if (stays.length > 0) {
      setFilteredStays(stays.filter(stay => (
        stay.maxGuests >= (filter.adults + filter.children) &&
        filter.location.city ? (stay.city === filter.location.city) : null
        )
      ))
    }
  }, [filter])

  const toggleModal = (focus?: string) => {
    focus ? setFocused(focus): null;
    setShowModal(!showModal)
  }

  return (
    <>
    <SearchModal 
      showModal={showModal} 
      toggleModal={toggleModal}
      filter={filter}
      setFilter={setFilter} 
      focused={focused}
      setFocused={setFocused} 
    />
    <View style={styles.container}>
      <View style={styles.logoRow}>
        <Feather name="triangle" size={22} color='#eb5757' />
        <CustomText fontFamily='Poppins' weight={700} style={styles.logoText}>windbnb</CustomText>
      </View>
      <SearchBar toggleModal={toggleModal} filter={filter} setFocused={setFocused}/>
      <View style={styles.titleRow}>
        <CustomText fontFamily='Montserrat' weight={700} style={styles.titleText}>{filter.location.city ? `Stays in ${filter.location.city}, ${filter.location.country}` : `Stays in ${filter.location.country}`}</CustomText>
        <CustomText fontFamily='Montserrat' weight={500} style={styles.stayCountText}>{filteredStays.length === 0 ? '' : `${filteredStays.length} stays`}</CustomText>
      </View>
      {filteredStays ? (
        <StayCardList 
          filteredStays={filteredStays}
        />
      ) : null }
    </View>
  </>
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