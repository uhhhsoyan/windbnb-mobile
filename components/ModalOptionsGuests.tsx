import React, { FC, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import CustomText from './CustomText';
import { AntDesign } from '@expo/vector-icons';

type Props = {
  adults: number;
  setAdults: React.Dispatch<React.SetStateAction<number>>;
  children: number;
  setChildren: React.Dispatch<React.SetStateAction<number>>;
}

const ModalOptionsGuests: FC<Props> = ({ adults, setAdults, children, setChildren }) => {
  
  return (
    <View style={styles.container}>
      <View style={styles.optionRow}>
        <CustomText fontFamily='Muli' weight={700} style={styles.optionsHeader}>Adults</CustomText>
        <CustomText fontFamily='Muli' weight={400} style={styles.optionsSubHeader}>Ages 13 or above</CustomText>
        <View style={styles.counterRow}>
          <TouchableOpacity onPress={() => (adults === 0 ? null : setAdults(adults - 1))}>
            <AntDesign name="minussquareo" size={28} color='#828282' />
          </TouchableOpacity>
          <CustomText fontFamily='Muli' weight={700} style={styles.count}>{adults}</CustomText>
          <TouchableOpacity onPress={() => (setAdults(adults + 1))}>
            <AntDesign name="plussquareo" size={28} color='#828282' />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.optionRow}>
        <CustomText fontFamily='Muli' weight={700} style={styles.optionsHeader}>Children</CustomText>
        <CustomText fontFamily='Muli' weight={400} style={styles.optionsSubHeader}>Ages 2-12</CustomText>
        <View style={styles.counterRow}>
          <TouchableOpacity onPress={() => (children === 0 ? null : setChildren(children - 1))}>
            <AntDesign name="minussquareo" size={28} color='#828282' />
          </TouchableOpacity>
          <CustomText fontFamily='Muli' weight={700} style={styles.count}>{children}</CustomText>
          <TouchableOpacity onPress={() => (setChildren(children + 1))}>
            <AntDesign name="plussquareo" size={28} color='#828282' />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  optionRow: {
    marginTop: 50,
    marginLeft: 26,
  },
  optionsHeader: {
    color: '#333',
    fontSize: 18,
  },
  optionsSubHeader: {
    color: '#bdbdbd',
    fontSize: 16,
  },
  counterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  count: {
    marginLeft: 15,
    marginRight: 15,
    fontSize: 20
  }
})

export default ModalOptionsGuests;