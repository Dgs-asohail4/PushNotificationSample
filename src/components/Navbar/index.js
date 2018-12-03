import React, { Component } from 'react';
import { Text, View, Platform } from 'react-native';

import StyleSheetFactory from './styles';
import Theme from '../../global/theme'
import { DrawerActions } from 'react-navigation';
import PropTypes from 'prop-types';
import BackButton from '../navIcons/backbutton';
import DrawerIcon from '../navIcons/drawerIcon';

export default class NavBar extends React.Component {

  onNavigationLeftMenuButtonPressed = () => {
    this.props.navigation.dispatch(DrawerActions.openDrawer());
  };

  onNavigationLeftBackButtonPressed = () => {
    this.props.navigation.goBack();
  };

  renderTitleItem = (title, options, styles, textStyle) => {
    const isCustom = options !== undefined;
    return isCustom ? this.renderCustomTitleItem(title, options,styles, textStyle) : this.renderNavigationTitleItem(title,styles, textStyle);
  };

  renderLeftItem = (options,styles, drawer) => {
    const isCustom = options !== undefined;
    return isCustom ? this.renderCustomLeftItem(options,styles, drawer) : this.renderNavigationLeftItem(styles, drawer);
  };

  renderRightItem = (options,styles) => {
    const isCustom = options !== undefined;
    return isCustom ? this.renderCustomRightItem(options,styles) : this.renderNavigationRightItem(styles);
  };

  renderNavigationTitleItem = (title,styles,textStyle) => (
    <View style={styles.title}>
      <Text style={[textStyle.primary,textStyle.baseColor, textStyle.header4]}>{title}</Text>
    </View>
  );

  renderNavigationLeftBackItem = (styles, isFirstScene, drawer) => (
    <BackButton styles={styles} isFirstScene={isFirstScene} drawer={drawer} navigation={this.props.navigation} theme={this.props.theme} globalStyles={this.props.globalStyles}/>
  );

  renderNavigationLeftMenuItem = (styles, isFirstScene, drawer) => (
    <DrawerIcon styles={styles} navigation={this.props.navigation} theme={this.props.theme} globalStyles={this.props.globalStyles}/>
  );

  renderNavigationLeftItemContent = (sceneIndex,styles, drawer) => {
    const isFirstScene = sceneIndex === 0;
    return drawer ? this.renderNavigationLeftMenuItem(styles, isFirstScene, drawer) : this.renderNavigationLeftBackItem(styles, isFirstScene, drawer);
  };

  renderNavigationLeftItem = (styles, drawer) => {
    const sceneIndex = this.props.headerProps.scenes.findIndex((x)=>x.isActive);
    return (
      <View style={styles.left}>
        {this.renderNavigationLeftItemContent(sceneIndex,styles, drawer)}
      </View>
    );
  };

  renderNavigationRightItem = (styles) => undefined;

  renderCustomTitleItem = (title, options, styles, textStyle) => (
    <View
      style={styles.title}>
      {options}
    </View>
  );

  renderCustomLeftItem = (options, styles) => (
    <View style={styles.left}>{options}</View>
  );

  renderCustomRightItem = (options, styles) => (
    <View style={styles.right}>{options}</View>
  );

  render() {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    const {primary, baseColor, header4} = this.props.globalStyles.textStyle;
    const { options } = this.props.headerProps.scene.descriptor;
    return (
      <View style={styles.layout}>
        <View style={styles.container}>
          {this.renderTitleItem(this.props.title, options.headerTitle, styles, {primary,baseColor, header4})}
          {this.renderLeftItem(options.headerLeft,styles, this.props.drawer)}
          {this.renderRightItem(options.headerRight,styles)}
        </View>
      </View>
    );
  }
}
