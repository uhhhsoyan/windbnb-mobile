import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomText from './CustomText';
import { Ionicons } from '@expo/vector-icons';

const SearchBar: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <CustomText fontFamily='Muli' weight={400} style={styles.textActive}>Helsinki, Finland</CustomText>
      </View>
      <View style={styles.guestsContainer}>
        <CustomText fontFamily='Muli' weight={400} style={styles.textInactive}>Add guests</CustomText>
      </View>
      <View style={styles.iconContainer}>
        <Ionicons name="ios-search" size={24} color='#eb5757' />
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    height: 60,
    borderRadius: 16,
    marginTop: 40,
    marginBottom: 40,
  },
  locationContainer: {
    flex: 5,
    height: '100%',
    borderRightWidth: 1,
    borderRightColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  guestsContainer: {
    flex: 4,
    height: '100%',
    borderRightWidth: 1,
    borderRightColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    flex: 2,
    alignItems: 'center'
  },
  textActive: {
    color: '#333333',
  },
  textInactive: {
    color: '#bdbdbd'
  },
  searchIcon: {

  }
})

export default SearchBar;