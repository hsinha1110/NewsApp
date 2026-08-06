import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from '../../styles/scaling';

const getStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      padding: moderateScale(16),
    },

    heading: {
      fontSize: moderateScale(30),
      fontWeight: '700',
      color: theme.text,
      marginBottom: moderateScale(20),
    },

    title: {
      fontSize: moderateScale(18),
      fontWeight: '700',
      color: theme.text,
      marginTop: moderateScale(24),
      marginBottom: moderateScale(12),
    },

    wrap: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
    },

    chip: {
      paddingHorizontal: moderateScale(16),
      paddingVertical: moderateScale(10),
      borderRadius: moderateScale(20),
      backgroundColor: theme.card,
      marginRight: moderateScale(10),
      marginBottom: moderateScale(10),
      borderWidth: 1,
      borderColor: theme.border,
    },

    selectedChip: {
      backgroundColor: theme.primary,
      borderColor: theme.primary,
    },

    chipText: {
      fontSize: moderateScale(14),
      color: theme.text,
      fontWeight: '500',
    },

    selectedChipText: {
      color: theme.text,
      fontWeight: '700',
    },

    button: {
      marginTop: verticalScale(30),
      backgroundColor: theme.primary,
      height: verticalScale(40),
      borderRadius: moderateScale(12),
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: verticalScale(30),
    },

    buttonText: {
      color: theme.text,
      fontSize: moderateScale(16),
      fontWeight: '700',
    },
  });

export default getStyles;
