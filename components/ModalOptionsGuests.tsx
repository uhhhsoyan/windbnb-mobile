import React, { FC, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import CustomText from './CustomText';
import { AntDesign } from '@expo/vector-icons';

const ModalOptionsGuests: FC = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.optionRow}>
        <CustomText fontFamily='Muli' weight={700} style={styles.optionsHeader}>Adults</CustomText>
        <CustomText fontFamily='Muli' weight={400} style={styles.optionsSubHeader}>Ages 13 or above</CustomText>
        <View style={styles.counterRow}>
          <TouchableOpacity>
            <AntDesign name="minussquareo" size={24} color='#828282' />
          </TouchableOpacity>
          <CustomText fontFamily='Muli' weight={700} style={styles.count}>{adults}</CustomText>
          <TouchableOpacity>
            <AntDesign name="plussquareo" size={24} color='#828282' />
          </TouchableOpacity>
        </View>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  optionRow: {
    marginTop: 50,
  },
  optionsHeader: {
    color: '#333',
  },
  optionsSubHeader: {
    color: '#bdbdbd',
  },
  counterRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  count: {
    marginLeft: 15,
    marginRight: 15,
  }
})

export default ModalOptionsGuests;