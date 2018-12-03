import React, { Component } from 'react';
import {
	Text,
	View,
	TouchableOpacity,
  ScrollView,
  TouchableHighlight,
  Image
} from 'react-native';
import StyleSheetFactory from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Header from './header'
import { ChangeDrawerScreen } from '../../navigation/helper';
import {items} from './draweritems'
import Theme from '../../global/theme'

class Drawer extends Component {
	constructor(props) {
    super(props);
    this._navigateAction = this._navigate.bind(this);
  }

  _navigate(route) {
    if(this.props.scene == route.navigateTo) { this.props.navigation.closeDrawer(); return; };
    ChangeDrawerScreen(this.props, route.navigateTo, route.title, true);
  }

  renderMenu = () => items.map(this.renderMenuItem);

  renderMenuItem = (item) => {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    const {moon,primary,xlarge,baseColor,header6, awesome,secondaryColor,small} = this.props.globalStyles.textStyle;
    return (
    <TouchableHighlight
      style={styles.container}
      key={item.name}
      underlayColor={Theme[this.props.theme].colors.button.underlay}
      activeOpacity={1}
      onPress={() => this._navigate(item)}>
      <View style={styles.content}>
        <View style={styles.content}>
          <Text
            style={[moon,primary,xlarge,styles.icon]}>
            <Icon name={item.icon} size={25} color={Theme[this.props.theme].colors.primary}/>
          </Text>
          <Text style={[primary, header6,baseColor]}>{item.name}</Text>
        </View>
        <Text style={[awesome,small,baseColor]}>
          <FontAwesomeIcon name={'chevron-right'} size={25} color={Theme[this.props.theme].colors.base} />
        </Text>
      </View>
    </TouchableHighlight>
  )};

	render() {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    const {primary, baseColor, logo, header1} = this.props.globalStyles.textStyle;
    return (
      <View style={styles.root}>
        <ScrollView
          showsVerticalScrollIndicator={false}>
          <View style={[styles.header, styles.content]}>
            <Header theme={this.props.theme}/>
            <Text style={[primary,baseColor,logo, header1]}>UI Kit</Text>
          </View>
          {this.renderMenu()}
        </ScrollView>
      </View>
		);
	}
}

export default Drawer;