import React, { Component } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons';
import { TEXT_COLOR_PRIMARY, COLOR_PRIMARY } from '../../global/theme/default';
import Theme from '../../global/theme'
export default class DrawerIcon extends Component {
  constructor(props){
      super(props)

  }
  render() {
    const {awesome, baseColor} = this.props.globalStyles.textStyle
    return (
        <TouchableHighlight
         style={this.props.styles.menu}
         underlayColor={Theme[this.props.theme].colors.button.underlay}
         onPress={()=>this.props.navigation.toggleDrawer()}
        >
        <Text style={[awesome,baseColor]}>
            <Icon name={'md-menu'} size={30} style={{margin:10}} color={Theme[this.props.theme].colors.text.base} />
        </Text>
        </TouchableHighlight>

    )
  }
}
