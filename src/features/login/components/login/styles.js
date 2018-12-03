import { StyleSheet } from 'react-native';
import {scaleVertical} from '../../../../utils/scale';
export default class StyleSheetFactory {
  static getSheet(theme) {
  return StyleSheet.create({
      container: {
        paddingHorizontal: 17,
        paddingBottom: scaleVertical(22),
        alignItems: 'center',
        flex: -1,
      },
      image: {
        resizeMode: 'cover',
        marginBottom: scaleVertical(10),
      },
      button:{
        marginHorizontal: 14,
      },
      save: {
        marginVertical: 9,
      },
      buttons: {
        flexDirection: 'row',
        marginBottom: scaleVertical(24),
      },
      screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: theme.colors.screen.base,
      },
      textRow: {
        justifyContent: 'center',
        flexDirection: 'row',
      },
      footer: {
        justifyContent: 'flex-end',
        flex: 1,
      },
  });
  }
}
