
import {StyleSheet} from 'react-native';
import {scale} from '../../utils/scale'
export default class StyleSheetFactory {
  static getSheet(theme) {
      const textStyle = StyleSheet.create({
            basic:{
                fontFamily: theme.fonts.family.bold,
                backgroundColor: 'transparent'
            },
            regular:{
                fontFamily:theme.fonts.family.regular
            },
            light:{
                fontFamily:theme.fonts.family.light
            },
            logo:{
                fontFamily:theme.fonts.family.logo
            },
            moon:{
                fontFamily:'icomoon'
            },
            awesome:{
                fontFamily:'fontawesome'
            },
            hero:{
                fontSize:scale(33)
            },
            menuIcon:{
                fontSize:44
            },
            header1:{
                fontSize:theme.fonts.sizes.h1,
                fontFamily:theme.fonts.family.bold
            },
            header2:{
                fontSize:theme.fonts.sizes.h2,
                fontFamily:theme.fonts.family.bold
            },
            header3:{
                fontSize:theme.fonts.sizes.h3,
                fontFamily:theme.fonts.family.bold
            },
            header4:{
                fontSize:theme.fonts.sizes.h4,
                fontFamily:theme.fonts.family.bold
            },
            header5:{
                fontSize:theme.fonts.sizes.h5,
                fontFamily:theme.fonts.family.bold
            },
            header6:{
                fontSize:theme.fonts.sizes.h6,
                fontFamily:theme.fonts.family.bold
            },
            secondary1:{
                fontSize:theme.fonts.sizes.s1,
                fontFamily:theme.fonts.family.bold
            },
            secondary2:{
                fontSize:theme.fonts.sizes.s2,
                fontFamily:theme.fonts.family.bold
            },
            secondary3:{
                fontSize:theme.fonts.sizes.s3,
                fontFamily:theme.fonts.family.regular
            },
            secondary4:{
                fontSize:theme.fonts.sizes.s4,
                fontFamily:theme.fonts.family.regular
            },
            secondary5:{
                fontSize:theme.fonts.sizes.s5,
                fontFamily:theme.fonts.family.light
            },
            secondary6:{
                fontSize:theme.fonts.sizes.s6,
                fontFamily:theme.fonts.family.light
            },
            secondary7:{
                fontSize:theme.fonts.sizes.s7,
                fontFamily:theme.fonts.family.regular
            },
            primary1:{
                fontSize:theme.fonts.sizes.p1,
                fontFamily:theme.fonts.family.light
            },
            primary2:{
                fontSize:theme.fonts.sizes.p2,
                fontFamily:theme.fonts.family.regular
            },
            primary3:{
                fontSize:theme.fonts.sizes.p3,
                fontFamily:theme.fonts.family.light
            },
            primary4:{
                fontSize:theme.fonts.sizes.p4,
                fontFamily:theme.fonts.family.regular
            },
            center:{
                textAlign:'center'
            },
            chat:{
                color:theme.colors.chat.text
            }
        });
        for (let key in theme.fonts.sizes){
            textStyle[key] = {
                fontSize: theme.fonts.sizes[key]
            }
        }

        for (let key in theme.colors.text){
            textStyle[`${key}Color`] = {
                color : theme.colors.text[key]
            }
        }
        return textStyle;
  }
}

