import React, { FC } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Stay } from '../types';
import StayCard from './StayCard';

type Props = {
  filteredStays: Stay[];
}

const StayCardList: FC<Props> = ({ filteredStays }) => {
  

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {filteredStays.map((stay, idx) => <StayCard key={idx} stay={stay} />)}   
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  }
})

export default StayCardList;