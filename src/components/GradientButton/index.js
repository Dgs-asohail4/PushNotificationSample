import React, { Component } from 'react';
import { Text, View,TouchableOpacity } from 'react-native';

import StyleSheetFactory from './styles';
import Theme from '../../global/theme'
import LinearGradient from 'react-native-linear-gradient'

export default class GradientButton extends Component {

  renderContent = (textStyle) => {
    const hasText = this.props.text === undefined;
    return hasText ? this.props.children : this.renderText(textStyle);
  };

  renderText = (textStyle) => (
    <Text style={textStyle}>{this.props.text}</Text>
  );

  render() {
    const { button, gradient, text: textStyle } = StyleSheetFactory(Theme[this.props.theme]).base;
    const { style, ...restProps } = this.props;
    const colors = this.props.colors;
    return (
      <TouchableOpacity
        style={[button, style]}
        {...restProps}>
        <LinearGradient
          colors={colors}
          start={{ x: 0.0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={[gradient]}>
          {this.renderContent(textStyle)}
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}
