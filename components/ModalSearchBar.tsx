import React, { FC } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CustomText from './CustomText';
import { Location } from '../types';

type Props = {
  setFocused: React.Dispatch<React.SetStateAction<string>>;
  location: Location;
  guests: number;
}

const ModalSearchBar: FC<Props> = ({ setFocused, location, guests }) => {
  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <TouchableOpacity onPress={() => setFocused('location')}>
          <CustomText fontFamily='Muli' weight={800} style={styles.searchTextHeader}>LOCATION</CustomText>
          <CustomText fontFamily='Muli' weight={400} style={location.city ? styles.text : styles.textInactive}>
            {location.city ? `${location.city}, ${location.country}` : 'Add city'}
          </CustomText>
        </TouchableOpacity>
      </View>
      <View style={styles.guestsContainer}>
        <TouchableOpacity onPress={() => setFocused('guests')}>
          <CustomText fontFamily='Muli' weight={800} style={styles.searchTextHeader}>GUESTS</CustomText>
          <CustomText fontFamily='Muli' weight={400} style={guests > 0 ? styles.text : styles.textInactive}>
            {guests > 0 ? `${guests} guests`: 'Add guests'}
          </CustomText>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    shadowOpacity: .1,
    shadowRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 120,
    borderRadius: 16,
    marginTop: 20,
    marginBottom: 30,
  },
  locationContainer: {
    height: '50%',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingLeft: 26,
    justifyContent: 'center',
  },
  guestsContainer: {
    height: '50%',
    width: '100%',
    paddingLeft: 26,
    justifyContent: 'center',
  },
  searchTextHeader: {
    fontSize: 9,
    marginBottom: 4,
  },
  text: {
    color: '#333333',
  },
  textInactive: {
    color: '#bdbdbd'
  },
})

export default ModalSearchBar;