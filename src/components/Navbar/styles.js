import { StyleSheet } from 'react-native';
import {UIConstants} from '../../global/config'

export default class StyleSheetFactory {
    static getSheet(theme) {
        return StyleSheet.create({
            layout: {
                backgroundColor: theme.colors.screen.base,
                paddingTop: UIConstants.StatusbarHeight,
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderBottomColor: theme.colors.border.base,
            },
            container: {
                flexDirection: 'row',
                height: UIConstants.AppbarHeight,

            },
            left: {
                position: 'absolute',
                top: 0,
                bottom: 0,
                justifyContent: 'center',
            },
            right: {
                position: 'absolute',
                right: 0,
                top: 0,
                bottom: 0,
                justifyContent: 'center',
            },
            title: {
                ...StyleSheet.absoluteFillObject,
                justifyContent: 'center',
                alignItems: 'center',
            },
            menu: {
                width: 40,
                margin:15
            }
        })
    }
};