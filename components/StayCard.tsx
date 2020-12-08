import React, { FC } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Stay } from '../types';
import CustomText from './CustomText';

type Props = {
  stay: Stay
}

const StayCard: FC<Props> = ({ stay }) => {
  //console.log(stay)
  return (
    <>
    {!stay ? null : (
      <View style={styles.container}>
      <View style={styles.imgContainer}>
      <Image source={{ uri: stay.photo }} style={styles.image}/>
      </View>
      <View style={styles.featuresRow}>
        {stay.superHost ? (
          <View style={styles.superHost}>
            <Text style={styles.superHostText}>SUPER HOST</Text>
          </View>
        ) : null
        }
        <Text>{stay.type}</Text>
        <Text>{stay.beds ? stay.beds : null}</Text>
        <View style={styles.ratingContainer}>
          <Ionicons name="ios-star" size={24} color='#eb5757' />
          <CustomText fontFamily='Montserrat' weight={800}>{stay.rating}</CustomText>
        </View>
      </View>
      <Text style={styles.description}>
        {stay.title}
      </Text>
    </View>
    )}
    </>  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  imgContainer: {
    width: '100%',
    height: 250,
    overflow: 'hidden',
    alignItems: 'center',
    borderRadius: 20,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    overflow: 'hidden',
  },
  featuresRow: {
    flexDirection: 'row',
    alignItems: 'center'

  },
  superHost: {
    borderWidth: 1,
    borderColor: '#4f4f4f',
    borderRadius: 10,
  },
  superHostText: {
    color: '#4f4f4f',
  },
  featuresText: {
    color: '#828282',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingsText: {
    color: '#4f4f4f',
  },
  description: {

  },
})

export default StayCard;