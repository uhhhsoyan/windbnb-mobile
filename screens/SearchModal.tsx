import React, { FC, useEffect, useState } from 'react';
import { View, StyleSheet, Modal, Animated, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ModalSearchBar, ModalOptionsLocation, ModalOptionsGuests, CustomText } from '../components/index';
import { Location } from '../types';

type Props = {
  showModal: boolean;
  toggleModal: () => void;
}

const SearchModal: FC<Props> = ({ showModal, toggleModal }) => {
  const [focused, setFocused] = useState<String>('guests');
  const [location, setLocation] = useState<Location>({ city: 'Helsinki', country: 'Finland' });
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  return (
    <Modal
      visible={showModal}
      animationType='slide'
    >
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <CustomText fontFamily='Muli' weight={700} style={styles.headerText}>Edit your search criteria</CustomText>
          <TouchableOpacity onPress={() => toggleModal()}>
            <Ionicons name='ios-close' size={36} color='#333'/>
          </TouchableOpacity>
        </View>
        <ModalSearchBar 
          setFocused={setFocused} 
          location={location}
          guests={adults + children}        
        />
        {focused === 'location' ? (
          <ModalOptionsLocation 
            location={location}
            setLocation={setLocation}
          />
        ) : (
          <ModalOptionsGuests
            adults={adults}
            setAdults={setAdults}
            children={children}
            setChildren={setChildren}
          />
        )}
        <TouchableOpacity>
          <View style={styles.button}>
            <Ionicons name="ios-search" size={32} color='#f2f2f2' />
            <CustomText fontFamily='Muli' weight={700} style={styles.searchText}>Search</CustomText>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 18,
    paddingTop: 60,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  headerText: {
    color: '#333',
    fontSize: 12,
  },
  searchText: {
    color: '#f2f2f2',
    marginLeft: 12,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#eb5757',
    borderRadius: 16,
    padding: 10,
    paddingLeft: 24,
    paddingRight: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: '100%'
  }

})

export default SearchModal;