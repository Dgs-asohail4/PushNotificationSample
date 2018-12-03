import { StyleSheet } from 'react-native';
export default class StyleSheetFactory {
    static getSheet(theme) {
        return StyleSheet.create({
            root: {
                backgroundColor: theme.colors.screen.base
            },
            rootContainer: {
                flexDirection: 'row',
                flexWrap: 'wrap',
            },
            empty: {
                borderWidth: StyleSheet.hairlineWidth,
                borderColor: theme.colors.border.base
            },
            icon: {
                marginBottom: 16
            }
        })
    }
};