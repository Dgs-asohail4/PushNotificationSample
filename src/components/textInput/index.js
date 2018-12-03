import React, { Component } from 'react';
import { Text, View,TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import StyleSheetFactory from './styles';
import Theme from '../../global/theme';

import { DEFUALT_THEME } from '../../global/config';



export default class CutomizedTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  static defaultProps = {

    borderRadius: 0,
    backgroundColor:Theme[DEFUALT_THEME].colors.control.background,
    borderWidth: 1,
    borderColor: Theme[DEFUALT_THEME].colors.border.base,
    iconColor:'#424242',
    inputColor:'#424242',
    placeholderTextColor : Theme[DEFUALT_THEME].colors.input.placeholder,
    placeholder: 'Type your Input',
    error : false,
    iconName : null,
    iconSize: 20,
    iconPos : 'left',
    theme : DEFUALT_THEME,
    contentContainerStyle:{}

  };


  render() {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    const {baseColor} = this.props.globalStyles.textStyle;
    const {
          borderRadius,
          backgroundColor,
          justifyContent,
          alignSelf,
          borderWidth,
          borderColor,
          iconColor,
          inputColor,
          placeholderTextColor,
          placeholder,
          error,
          iconSize,
          iconName,
          iconPos,
          inputStyle,
          contentContainerStyle,
          ...attributes
          } = this.props;
    const containerStyle = {...styles.searchSection,
                           borderRadius,
                           backgroundColor,
                           justifyContent,
                           alignSelf,
                           borderWidth,
                           borderColor,
                          };

    const _inputStyle = [styles.input, baseColor, inputStyle];

    return (
        <View style={[containerStyle, error ? styles.textInvalid : containerStyle, contentContainerStyle]}>
          {this.props.iconName && this.props.iconPos == 'left' && <Icon style={[styles.searchIcon]} name={iconName} size={iconSize} color = {iconColor} /> }
          <TextInput
            {...attributes}
            style={[iconPos == 'right' ? styles.searchSectionLeft : _inputStyle]}
            placeholder={placeholder}
            underlineColorAndroid="transparent"
            placeholderTextColor={placeholderTextColor}

          />
          {this.props.iconName && this.props.iconPos == 'right' && <Icon style={[styles.searchIconRight]} name={iconName} size={iconSize} color = {iconColor} /> }
        </View>



    );

  }
}