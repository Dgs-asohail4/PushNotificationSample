import { StyleSheet } from 'react-native';
import {scaleVertical} from '../../../../utils/scale';

export default class StyleSheetFactory {
  static getSheet(theme) {
      return StyleSheet.create({
        container: {
          backgroundColor: theme.colors.screen.base,
          justifyContent: 'space-between',
          flex: 1
        },
        image: {
          resizeMode: 'cover',
          height: scaleVertical(430),
        },
        text: {
          alignItems: 'center'
        },
        hero: {
          fontSize: 37,
        },
        appName: {
          fontSize: 42,
        },
        progress: {
          alignSelf: 'center',
          marginBottom: 35,
          backgroundColor: '#e5e5e5'
        }
      })
  }
}