import React, { FC } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CustomText from './CustomText';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  setFocused: (toFocus: string) => void;
}

const ModalSearchBar: FC<Props> = ({ setFocused }) => {
  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <CustomText fontFamily='Muli' weight={800} style={styles.searchTextHeader}>LOCATION</CustomText>
        <CustomText fontFamily='Muli' weight={400} style={styles.textActive}>Helsinki, Finland</CustomText>
      </View>
      <View style={styles.guestsContainer}>
        <CustomText fontFamily='Muli' weight={800} style={styles.searchTextHeader}>GUESTS</CustomText>
        <CustomText fontFamily='Muli' weight={400} style={styles.textInactive}>Add guests</CustomText>
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
  textActive: {
    color: '#333333',
  },
  textInactive: {
    color: '#bdbdbd'
  },
  searchIcon: {

  }
})

export default ModalSearchBar;