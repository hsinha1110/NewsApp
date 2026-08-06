import { StyleSheet } from 'react-native';
import { moderateScale } from '../../styles/scaling';

const getStyles = (theme: any) =>
  StyleSheet.create({
    button: {
      height: moderateScale(48),
      borderRadius: moderateScale(12),
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: moderateScale(30),
      marginBottom: moderateScale(30),
      backgroundColor: theme.primary,
    },

    buttonText: {
      fontSize: moderateScale(16),
      fontWeight: '700',
      color: theme.text,
    },
  });

export default getStyles;
