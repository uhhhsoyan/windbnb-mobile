import React, { FC } from 'react';
import { Text } from 'react-native';
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


type Props = {
  fontFamily: string;
  weight: number;
  //styles: React.CSSProperties;
  children: React.ReactChild;
}

const CustomText: FC<Props> = ({ fontFamily, weight, children }) => {
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
      default:
        return 'Arial'
    }
  }

  if (!fontsLoaded) {
    return <Text>{children}</Text>;
  } else {
    return <Text style={{ fontFamily: getFont(fontFamily, weight) }}>{children}</Text>;
  }
  
}

export default CustomText;