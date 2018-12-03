import React , {Component} from 'react'
import {View, Text, Image} from 'react-native'

import StyleSheetFactory from './styles'
import Theme from '../../global/theme'
import { DEFUALT_THEME } from '../../global/config';

export default class Header extends Component{
    constructor(props){
        super(props)
    }

    getThemeImageSource = (theme) => (
        theme === DEFUALT_THEME ?
          require('../../global/assets/img/smallLogo.png') : require('../../global/assets/img/smallLogoDark.png')
    );


    render(){
        const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
        return (
            <Image source={this.getThemeImageSource(this.props.theme)} style={styles.headerIcon}/>

        )
    }
}