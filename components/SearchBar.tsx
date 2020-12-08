import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SearchBar: FC = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Helsinki, Finland</Text>
      </View>
      <View>
        <Text>Add guests</Text>
      </View>
      <View>
        <Text>Search</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    shadowOpacity: .1,
    shadowColor: '#000',
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {

  },
  searchIcon: {

  }
})

export default SearchBar;