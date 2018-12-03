import { StyleSheet } from 'react-native';

export default class StyleSheetFactory {
    static getSheet(theme){
        return StyleSheet.create({
            searchSection: {
                flexDirection: 'row',
            },
            searchSectionWoIcon: {
                marginRight : 13,
                alignItems : 'center',
                padding:15,
            },
            searchSectionLeft: {
                paddingRight : 0,
            },
            searchIcon: {
                alignItems : 'center',
                paddingHorizontal:15,
            },
            searchIconRight: {
                alignItems : 'center',
                padding:15,
            },
            input:{
                flex:1,
                fontSize:18,
            },
            textInvalid: {
                borderColor : 'red'
            },
            rounded:{
                fontSize:theme.fonts.sizes.h6,
                borderWidth:1
            }
        });
    }
}