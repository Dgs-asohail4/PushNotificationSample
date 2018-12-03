import React, { Component } from 'react';
import { Text, View,TouchableOpacity} from 'react-native';
import styles from './styles';
import { COLOR_PRIMARY, TEXT_COLOR_PRIMARY} from '../../global/theme/default';
export default class Button extends Component {

  constructor(props) {
    super(props);
  }

  static defaultProps = {
    borderRadius: 0,
    color: COLOR_PRIMARY,
    borderColor: COLOR_PRIMARY,
    textColor:TEXT_COLOR_PRIMARY,
    text:"Button",
    style:{},
    textStyle:{}
  };

  render() {
    const { text, color, borderRadius, borderColor, textColor, style , textStyle ,children, ...attributes} = this.props;
    const buttonStyle={...styles.buttonStyle,
      backgroundColor:color,
      borderRadius:borderRadius,
      borderColor:borderColor,
    }
    const textStyleCustom = {...styles.textStyle, color: textColor}

    return (
		  <TouchableOpacity style={[buttonStyle, style]}
          {...attributes}
        >
			  <Text style={[textStyleCustom, textStyle]}>{text}</Text>
      </TouchableOpacity>
		);

    }
}
