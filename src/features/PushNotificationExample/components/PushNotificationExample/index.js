import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { pushNotifications } from '../../../../global/services'
import Theme from '../../../../global/theme'
import GradientButton from '../../../../components/GradientButton/container'
export default class PushNotificationExample extends Component {

  handleOnPress = () => {
    pushNotifications.localNotification();
  };


  render() {
    const {header5,baseColor} = this.props.globalStyles.textStyle;
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:Theme[this.props.theme].colors.screen.base}}>
        <Text style={[header5,baseColor, {marginVertical:20}]}>
          Press the button to see push Notification
        </Text>
        <GradientButton
          text='Press Me'
          colors={Theme[this.props.theme].colors.gradients.base}
          onPress={this.handleOnPress}
        />
      </View>
    );
  }
}