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
      marginTop: moderateScale(10),
      marginBottom: moderateScale(18),
    },

    sectionTitle: {
      fontSize: moderateScale(22),
      fontWeight: '700',
      color: theme.text,
      marginTop: moderateScale(15),
      marginBottom: moderateScale(12),
    },

    categoryContainer: {
      paddingBottom: moderateScale(18),
    },

    categoryChip: {
      height: moderateScale(42),
      paddingHorizontal: moderateScale(18),
      borderRadius: moderateScale(21),
      backgroundColor: theme.card,
      marginRight: moderateScale(10),
      borderWidth: 1,
      borderColor: theme.border,
      justifyContent: 'center',
      alignItems: 'center',
    },

    selectedChip: {
      backgroundColor: theme.primary,
      borderColor: theme.primary,
    },

    categoryText: {
      color: theme.text,
      fontSize: moderateScale(14),
      fontWeight: '600',
    },

    selectedText: {
      color: '#fff',
    },

    cardContainer: {
      paddingHorizontal: moderateScale(20),
      paddingTop: moderateScale(25),
      paddingBottom: moderateScale(20),
    },

    card: {
      backgroundColor: theme.card,
      borderRadius: moderateScale(22),
      marginBottom: moderateScale(20),
      overflow: 'hidden',

      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: moderateScale(6),
      },
      shadowOpacity: 0.08,
      shadowRadius: moderateScale(10),

      elevation: moderateScale(5),
    },

    image: {
      width: '100%',
      height: moderateScale(230),
      backgroundColor: theme.border,
    },

    content: {
      padding: moderateScale(16),
    },

    headerRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: moderateScale(8),
    },

    source: {
      color: theme.primary,
      fontSize: moderateScale(12),
      fontWeight: '700',
      textTransform: 'uppercase',
    },

    title: {
      fontSize: moderateScale(20),
      fontWeight: '700',
      color: theme.text,
      lineHeight: moderateScale(28),
      marginTop: moderateScale(4),
    },

    description: {
      fontSize: moderateScale(15),
      color: theme.subText,
      lineHeight: moderateScale(22),
      marginTop: moderateScale(10),
    },

    footer: {
      marginTop: moderateScale(16),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    publishedAt: {
      color: theme.subText,
      fontSize: moderateScale(12),
    },

    loader: {
      marginVertical: moderateScale(20),
    },

    error: {
      color: theme.primary,
      textAlign: 'center',
      fontSize: moderateScale(16),
      marginTop: moderateScale(40),
    },

    swiperContainer: {
      height: moderateScale(230),
      borderRadius: moderateScale(20),
      overflow: 'hidden',
      marginBottom: moderateScale(20),
    },

    breakingCard: {
      flex: 1,
      borderRadius: moderateScale(20),
      overflow: 'hidden',
    },

    breakingImage: {
      width: '100%',
      height: '100%',
    },

    overlay: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: moderateScale(16),
      backgroundColor: 'rgba(0,0,0,0.45)',
    },

    breakingTitle: {
      color: '#fff',
      fontSize: moderateScale(20),
      fontWeight: '700',
    },

    breakingSource: {
      color: '#fff',
      marginTop: moderateScale(6),
      fontSize: moderateScale(13),
    },

    pagination: {
      bottom: moderateScale(12),
    },
  });

export default getStyles;
