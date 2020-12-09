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
            <CustomText fontFamily='Montserrat' weight={700} style={styles.superHostText}>SUPER HOST</CustomText>
          </View>
        ) : null}
        <CustomText fontFamily='Montserrat' weight={500} style={styles.featuresText}>{stay.type}</CustomText>
        {stay.beds ? (
          <CustomText fontFamily='Montserrat' weight={500} style={styles.featuresText}>{` | ${stay.beds} beds`}</CustomText>
        ) : null}
        <View style={styles.ratingsContainer}>
          <Ionicons name="ios-star" size={16} color='#eb5757' style={{ marginRight: 5 }}/>
          <CustomText fontFamily='Montserrat' weight={500} style={styles.ratingsText}>{stay.rating}</CustomText>
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
    marginBottom: 32,
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
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  superHost: {
    borderWidth: 1,
    borderColor: '#4f4f4f',
    borderRadius: 12,
    height: 24,
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  superHostText: {
    color: '#4f4f4f',
    fontSize: 10,
  },
  featuresText: {
    color: '#828282',
  },
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
  },
  ratingsText: {
    color: '#4f4f4f',
  },
  description: {
    color: '#333',
    fontSize: 16,
  },
})

export default StayCard;