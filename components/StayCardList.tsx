import React, { FC } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Stay } from '../types';
import StayCard from './StayCard';

type Props = {
  stays: Stay[];
}

const StayCardList: FC<Props> = ({ stays }) => {
  return (
    <ScrollView style={styles.container}>
      {stays.map((stay, idx) => <StayCard key={idx} stay={stay} />)}   
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  }
})

export default StayCardList;