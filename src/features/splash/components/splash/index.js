import React from 'react'
import {
  View,
  Text,
  AsyncStorage,
  StatusBar,
  Dimensions,
  Image
} from 'react-native'

import StyleSheetFactory from './styles'
import { ChangeStack } from '../../../../navigation/helper'
import ProgressBar from '../../../../components/progress/ProgressBar2'
import {scale} from '../../../../utils/scale';
import Theme from '../../../../global/theme'
import {DEFUALT_THEME} from '../../../../global/config'
import {navigator} from '../../../../global/services'

let timeFrame = 500;
export default class Splash extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      progress: 0,
      showSplash:false
    };
  }

  // componentWillMount(){
  //   const style = {
  //     textStyle : TextStyleFactory.getSheet(Theme[this.props.theme]),
  //     buttonStyle:ButtonStyleFactory.getSheet(Theme[this.props.theme])
  //   }
  //   this.props.UpdateGlobalTheme(style);
  // }.


  componentWillMount(){
    console.log('componentWillMount')
  }

  componentWillUnmount(){
    console.log('componentWillUnmount')
  }

  componentDidMount() {
    console.log(this.props)
    if (this.props.navigation.state.params && this.props.navigation.state.params.routeName){
      var routeName = this.props.navigation.state.params.routeName
      navigator.navigate(routeName);
    } else {
      this.setState({showSplash:true});
      StatusBar.setHidden(true, 'none');
      this.timer = setInterval(() => {

      if (this.state.progress == 1) {
        clearInterval(this.timer);
        setTimeout(() => {
          StatusBar.setHidden(false, 'slide');
          if(this.state.showSplash)
            ChangeStack(this.props, "Auth", "Auth", true);
        }, timeFrame);
      } else {
        let random = Math.random() * 0.5;
        let progress = this.state.progress + random;
        if (progress > 1) {
          progress = 1;
        }
        this.setState({progress});
      }
    }, timeFrame)
    }
  }

  render() {
    let width = Dimensions.get('window').width;
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    const {baseColor} = this.props.globalStyles.textStyle;
    if(this.state.showSplash){
      return (  <View style={styles.container}>
        <View>
          {this.props.theme == DEFUALT_THEME ?
            <Image style={[styles.image, {width}]} source={require('../../../../global/assets/img/splashBack.png')}/>
            : <Image style={[styles.image, {width}]} source={require('../../../../global/assets/img/splashBack_Dark.png')}/>
          }
          <View style={styles.text}>
            <Text style={[baseColor,styles.hero]}>Welcome To</Text>
            <Text style={[baseColor,styles.appName]}>UI Kit</Text>
          </View>
        </View>
        <ProgressBar
          color={Theme[this.props.theme].colors.accent}
          style={styles.progress}
          progress={this.state.progress} width={scale(320)}/>
      </View>)
    } else {
      return (null)
    }

  }
}
