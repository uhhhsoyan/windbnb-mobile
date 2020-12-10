import React, { FC } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Location } from '../types';
import CustomText from './CustomText';

const LOCATIONS = [
  { city: 'Helsinki', country: 'Finland' },
  { city: 'Turku', country: 'Finland' },
  { city: 'Oulu', country: 'Finland' },
  { city: 'Vaasa', country: 'Finland' },
]

type Props = {
  location: Location;
  setLocation: React.Dispatch<React.SetStateAction<Location>>;
}

const ModalOptionsLocation: FC<Props> = ({ location, setLocation }) => {

  return (
    <View style={styles.container}>
      {LOCATIONS.map(loc => {
        return (
          <TouchableOpacity onPress={() => setLocation(loc)} key={loc.city}>
            <View style={styles.rowContainer}>
              <MaterialIcons name="location-on" size={28} color='#4f4f4f' />
              <CustomText fontFamily='Muli' weight={400} style={loc === location ? styles.textActive : styles.text}>{`${loc.city}, ${loc.country}`}</CustomText>
            </View>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingLeft: 26,
    width: '100%'
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 36,
  },
  textActive: {
    color: '#4f4f4f',
    fontSize: 18,
    marginLeft: 10,
  },
  text: {
    color: '#4f4f4f',
    fontSize: 18,
    marginLeft: 10,
  },
})

export default ModalOptionsLocation;