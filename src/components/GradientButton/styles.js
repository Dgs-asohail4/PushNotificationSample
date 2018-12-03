import { StyleSheet } from 'react-native';

import { scaleVertical, scale } from '../../utils/scale';

const getBase = (theme) => ({
  base: {
    button: {
      alignItems: 'stretch',
      paddingVertical: 0,
      paddingHorizontal: 0,
      height: scaleVertical(40),
      borderRadius: 20,
      width:scale(270)
    },
    gradient: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
    },
    text: {
      backgroundColor: 'transparent',
      color: theme.colors.text.inverse,
      fontSize:18
    },
  }
});

const getLarge = () => ({
    large: {
    button: {
      alignSelf: 'stretch',
      height: scaleVertical(56),
      borderRadius: 28,
    },
    gradient: {
      borderRadius: 28,
    },
  },
})
const getStats = (theme) => ({
    statItem: {
    button: {
      flex: 1,
      borderRadius: 5,
      marginHorizontal: 10,
      height: null,
      alignSelf: 'auto',
    },
    gradient: {
      flex: 1,
      borderRadius: 5,
      padding: 10,
    },
  },
});

const getGradientButtonStyles = (theme) =>({
    ...getBase(theme),
    ...getLarge(theme),
    ...getStats(theme)
});

export default getGradientButtonStyles;