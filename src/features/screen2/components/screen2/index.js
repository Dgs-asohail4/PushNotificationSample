import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import {PopScreen} from '../../../../navigation/helper';

import Button from '../../../../components/button';
import { COLOR_PRIMARY } from '../../../../global/theme/default';

export default class ScreenNew extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Screen 2</Text>
        <Button
          color={COLOR_PRIMARY}
          onPress={() => PopScreen(this.props)}
          text="Go Back"
        />
      </View>
    )
  }
}