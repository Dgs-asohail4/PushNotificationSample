import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import StyleSheetFactory from './styles';
import Theme from '../../../../global/theme'
import {items} from '../../../../components/drawer/draweritems'
import Icon from 'react-native-vector-icons/Ionicons'

export default class Gridv1 extends Component {
  static navigationOptions = {
    title: 'Grid Menu'.toUpperCase()
  };

  constructor(props){
    super(props);
    this.state ={dimensions:undefined}
  };

  _onLayout = event => {
    if(this.state.height)
      return;
    let dimensions = event.nativeEvent.layout;
    this.setState({dimensions})
  }

  _getEmptyCount(size) {
    let rowCount = Math.ceil((this.state.dimensions.height - 20) / size);
    return rowCount * 3 - items.length;
  };

  render() {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    let navigate = this.props.navigation.navigate;
    const {tile} = this.props.globalStyles.buttonStyle;
    const {theme} = this.props
    const {primary, moon, xxlarge, center, regular,small,baseColor} = this.props.globalStyles.textStyle;
    let menuItems = <View/>;

    if (this.state.dimensions) {
      let size = this.state.dimensions.width / 3;
      let emptyCount = this._getEmptyCount(size);

      menuItems = items.map(function (route, index) {
        return (
          <View key={index} style={{flexDirection:'column'}}>
            <TouchableOpacity
            style={[tile,{width: size, height: size, justifyContent:'center'}]}
            onPress={() => {
              navigate(route.navigateTo)
            }}>

            <Text style={[primary, moon, xxlarge,center]} >
              <Icon name={route.icon} size={35} style={styles.icon}  color={Theme[theme].colors.primary} />
            </Text>
            <Text style={[center, regular, primary, baseColor, small]}>{route.name}</Text>

            </TouchableOpacity>

          </View>
        )
      });

      for (let i = 0; i < emptyCount; i++) {
        menuItems.push(<View key={'empty' + i} style={[{height: size, width: size}, styles.empty]}/>)
      }
    }

    return (
      <ScrollView
        style={styles.root}
        onLayout={this._onLayout}
        contentContainerStyle={styles.rootContainer}>
        {menuItems}
      </ScrollView>
    );
  }
}