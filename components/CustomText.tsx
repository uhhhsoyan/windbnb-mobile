import React, { FC } from 'react';
import { Text, StyleProp, TextStyle } from 'react-native';
import { 
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
} from '@expo-google-fonts/montserrat';
import { 
  Muli_400Regular,
  Muli_500Medium,
  Muli_600SemiBold,
  Muli_700Bold,
  Muli_800ExtraBold,

} from '@expo-google-fonts/muli';
import {
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';


type Props = {
  fontFamily: string;
  weight: number;
  children: React.ReactChild;
  style?: StyleProp<TextStyle>;
}

const CustomText: FC<Props> = ({ fontFamily, weight, children, style }) => {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Muli_400Regular,
    Muli_500Medium,
    Muli_600SemiBold,
    Muli_700Bold,
    Muli_800ExtraBold,
    Poppins_700Bold,
  });

  const getFont = (fontFamily: string, weight: number) => {
    switch(fontFamily) {
      case 'Montserrat':
        switch(weight) {
          case 400:
            return 'Montserrat_400Regular';
          case 500:
            return 'Montserrat_500Medium';
          case 600:
            return 'Montserrat_600SemiBold';
          case 700:
            return 'Montserrat_700Bold';
          case 800:
            return 'Montserrat_800ExtraBold';
          default:
            return 'Montserrat_400Regular';
        }
      case 'Muli':
        switch(weight) {
          case 400:
            return 'Muli_400Regular';
          case 500:
            return 'Muli_500Medium';
          case 600:
            return 'Muli_600SemiBold';
          case 700:
            return 'Muli_700Bold';
          case 800:
            return 'Muli_800ExtraBold';
          default:
            return 'Muli_400Regular';
        }
      case 'Poppins':
        switch(weight) {
          case 700:
            return 'Poppins_700Bold'
          default:
            return 'Poppins_700Bold'
        }
      default:
        return 'Arial'
    }
  }

  if (!fontsLoaded) {
    return <Text>{children}</Text>;
  } else {
    return <Text style={[ style, { fontFamily: getFont(fontFamily, weight) }]}>{children}</Text>;
  }
  
}

export default CustomText;