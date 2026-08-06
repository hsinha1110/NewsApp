import { StyleSheet } from 'react-native';
import { moderateScale } from '../../styles/scaling';

const getStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },

    heading: {
      fontSize: moderateScale(28),
      fontWeight: '700',
      margin: moderateScale(20),
      color: theme.text,
    },

    list: {
      paddingHorizontal: moderateScale(20),
      paddingBottom: moderateScale(20),
      flexGrow: 1,
    },

    emptyList: {
      flexGrow: 1,
      justifyContent: 'center',
    },

    emptyContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    emptyText: {
      fontSize: moderateScale(18),
      color: theme.subText,
      fontWeight: '600',
    },

    card: {
      backgroundColor: theme.card,
      borderRadius: moderateScale(18),
      marginBottom: moderateScale(18),
      overflow: 'hidden',
      elevation: moderateScale(4),
    },

    image: {
      width: '100%',
      height: moderateScale(220),
      backgroundColor: theme.border,
    },

    content: {
      padding: moderateScale(16),
    },

    headerRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    source: {
      color: theme.primary,
      fontWeight: '700',
      fontSize: moderateScale(12),
      textTransform: 'uppercase',
    },

    title: {
      fontSize: moderateScale(18),
      fontWeight: '700',
      color: theme.text,
      marginTop: moderateScale(10),
    },

    description: {
      marginTop: moderateScale(8),
      color: theme.subText,
      fontSize: moderateScale(15),
      lineHeight: moderateScale(20),
    },

    footer: {
      marginTop: moderateScale(12),
    },

    date: {
      color: theme.subText,
      fontSize: moderateScale(12),
    },
  });

export default getStyles;
