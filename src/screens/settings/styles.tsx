import { StyleSheet } from 'react-native';
import { moderateScale } from '../../styles/scaling';

const getStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },

    heading: {
      fontSize: moderateScale(25),
      fontWeight: '700',
      color: theme.text,
      marginHorizontal: moderateScale(20),
      marginTop: moderateScale(12),
      marginBottom: moderateScale(25),
    },

    section: {
      marginHorizontal: moderateScale(20),
      marginBottom: moderateScale(12),
      fontSize: moderateScale(15),
      color: theme.subText,
      fontWeight: '600',
    },

    card: {
      backgroundColor: theme.card,
      marginHorizontal: moderateScale(20),
      borderRadius: moderateScale(18),
      marginBottom: moderateScale(24),
      overflow: 'hidden',
      elevation: moderateScale(4),
    },

    row: {
      height: moderateScale(60),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: moderateScale(18),
    },

    left: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    right: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    title: {
      fontSize: moderateScale(16),
      color: theme.text,
      marginLeft: moderateScale(14),
      fontWeight: '500',
    },

    value: {
      fontSize: moderateScale(14),
      color: theme.subText,
      marginRight: moderateScale(8),
    },

    divider: {
      height: moderateScale(1),
      backgroundColor: theme.border,
      marginLeft: moderateScale(54),
    },

    version: {
      textAlign: 'center',
      color: theme.subText,
      fontSize: moderateScale(14),
      marginBottom: moderateScale(30),
    },
  });

export default getStyles;
