import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';

import StyleSheetFactory from './styles';
import Theme from '../../global/theme'

export default class MyTextInput extends Component {
  constructor(props) {
    super(props);
    this.focusInput = this._focusInput.bind(this);
  }

  _focusInput() {
    this.refs.input.focus();
  }

  _displayLabel(label, labelStyle) {
    if (typeof label === 'string') {
      return (
        <Text style={labelStyle} onPress={this.focusInput}>{label}</Text>
      )
    } else {
      return React.cloneElement(label, {
        onPress: (e) => {
          this.refs.input.focus();
          label.props.onPress && label.props.onPress(e)
        },
        style: [labelStyle, label.props.style]
      });
    }
  }

  extractNonStyleValue(style, property) {
    let val = style.find((e)=>e.hasOwnProperty(property));
    if (val) {
      style.splice(style.indexOf(val), 1);
    } else {
      return val;
    }
    return val[property];
  }

  static defaultProps = {
    style : {},
    label:undefined,
    labelStyle:{},
    inputStyle:{}
  }

  render() {
    let {
      style,
      label,
      labelStyle,
      inputStyle,
      types,
      ...inputProps
    } = this.props;
    const styles = this.props.globalStyles.textInputStyle;
    var {container, input, label:labelS} = styles['basic'];

    if(types) {
      types.split(" ").forEach(function(type){
        container = {...container, ...styles[type].container};
        input = {...input,...styles[type].input};
        labelS = {...labelS,...styles[type].label};
      });
    }

    //let placeholderColor = this.extractNonStyleValue(input, 'placeholderTextColor');
    labelStyle = [labelS, labelStyle];
    inputProps.style = [input, inputStyle];
    //inputProps.placeholderTextColor = placeholderColor;
   container ={...container,...style};
    return (
      <TouchableOpacity activeOpacity={1} onPress={this.focusInput} style={{flexDirection:'row', alignItems:'center'}}>
        <View style={[{flex:1,flexDirection:'row'}]}>
            {label && this._displayLabel(label, labelStyle)}
        </View>
        <View style={[{justifyContent:'space-evenly'}]}>
          <TextInput underlineColorAndroid='transparent' ref={'input'} {...inputProps}/>
        </View>
      </TouchableOpacity>
    );
  }
}