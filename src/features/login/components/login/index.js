import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  ToastAndroid,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
  AsyncStorage
} from 'react-native';
import StyleSheetFactory from './styles';

import {USER_KEY, DEFUALT_THEME} from '../../../../global/config'
import {ChangeStack, PushNewScreen} from '../../../../navigation/helper';
import Icon from 'react-native-vector-icons/Ionicons'
import {scaleModerate, scaleVertical} from '../../../../utils/scale'

import CustomizedTextInput from '../../../../components/textInput/container';
import Button from '../../../../components/button';
import Theme from '../../../../global/theme'

export default class Login extends Component {
  static navigationOptions = ({navigation}) => ({
    header:null
  });
  constructor(props){
    super(props)
    this.state = {
      username: 'chad.reycenga@ibex.co', password: 'Password123'
    }
    // this.props.navigator.setDrawerEnabled({
    //   side: "left",
    //   enabled: false,
    //   screen: "global.drawer"
    // });
  }


  storeAuthData = async (response) => {
    var data = response.data;
    var authData = { token: data.access_token };
    const user = await AsyncStorage.setItem(USER_KEY, authData)
    return this.props.requireAuthentication();
  };

  onChangeText = (key, value) => {
    this.setState({ [key]: value })
  }
  signIn = async () => {
    const { username, password } = this.state
    try {
       // login with provider
       if(username == undefined || username == ""){
          return;
       }
       if(password == undefined || password == ""){
        return;
       }



       const user = await AsyncStorage.setItem(USER_KEY, username)
       ChangeStack(this.props, "Home", "Home", true);

    }catch (err) {
      console.log('error:', err)
    }
    //    this.props.loginAction({username,password}).then(
    //       response => {
    //           console.log(this.props);
    //           storeAuthDate(response);
    //     //      dispatch({type: types.LOGIN + SUCCESS_PREFIX, response})
    //       },
    //       error => {
    //           console.log(error);
    //       }
    //     )
    //    //const user = await AsyncStorage.setItem(USER_KEY, username)
    //    //console.log('user successfully signed in!', user)
    //   // ChangeStack(this.props, "app.home", "Home", true);
    // } catch (err) {
    //   console.log('error:', err)
    // }


  }
  getThemeImageSource = (theme) => (
      theme == DEFUALT_THEME ?
      require('../../../../global/assets/img/backgroundLoginV1.png')
      : require('../../../../global/assets/img/backgroundLoginV1DarkTheme.png')
  );
  renderImage = (styles) => {
    const screenSize = Dimensions.get('window');
    const imageSize = {
      width: screenSize.width,
      height: screenSize.height - scaleModerate(375, 1),
    };
    return (
      <Image
        style={[styles.image, imageSize]}
        source={this.getThemeImageSource(this.props.theme)}
      />
    );
  };
  render() {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme])
    const {social, clear} = this.props.globalStyles.buttonStyle;
    const {awesome,hero,header6, primary3,accentColor, baseColor,inverseColor, center} = this.props.globalStyles.textStyle;
    return (
      <View style={styles.screen}>
      <ScrollView keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}>

        {this.renderImage(styles)}
        <View style={styles.container}>
        <View style={styles.buttons}>
            <TouchableOpacity
              style={[styles.button,social,{justifyContent:'center'}]}>
              <Icon name={'logo-facebook'} size={25} style={[awesome,hero,accentColor,center,{alignSelf:'center'}]}/>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button,social,{justifyContent:'center'}]}
              >
              <Icon name={'logo-twitter'} size={25} style={[awesome,hero,accentColor,center,{alignSelf:'center'}]}/>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button,social,{justifyContent:'center'}]} >
              <Icon name={'logo-google'} size={25} style={[awesome,hero,accentColor,center,{alignSelf:'center'}]}/>
            </TouchableOpacity>
          </View>
          <CustomizedTextInput
            contentContainerStyle={{marginVertical:scaleVertical(10),padding:6}}
            placeholder='Username'
            autoCapitalize="none"
            autoCorrect={false}
            backgroundColor={Theme[this.props.theme].colors.control.background}
            borderColor={Theme[this.props.theme].colors.border.base}
            borderRadius={24}
            placeholderTextColor={baseColor.color}
            value={this.state.username}
            onChangeText={val => this.onChangeText('username', val)}
          />
          <CustomizedTextInput
            contentContainerStyle={{marginVertical:scaleVertical(10),padding:6}}
            placeholder='Password'
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            backgroundColor={Theme[this.props.theme].colors.control.background}
            borderColor={Theme[this.props.theme].colors.border.base}
            borderRadius={24}
            placeholderTextColor={baseColor.color}
            value={this.state.password}
            onChangeText={val => this.onChangeText('password', val)}
          />
              <Button
                  text='LOGIN'
                  borderRadius={24}
                  color={Theme[this.props.theme].colors.gradients.base[0]}
                  style={[{width: 300},{height:50},baseColor,styles.save]}
                  textStyle={[inverseColor]}
                  onPress={this.signIn}
                />

                <View style={styles.footer}>
                <View style={styles.textRow}>
                  <Text style={[primary3, baseColor]}>Don’t have an account? </Text>
                  <TouchableOpacity
                  onPress={()=>{}}
                  style={[clear]} >
                  <Text style={[header6, baseColor]}>Sign up now</Text>
                </TouchableOpacity>
                </View>
              </View>


          </View>
          </ScrollView>
      </View>
      )
  }
}