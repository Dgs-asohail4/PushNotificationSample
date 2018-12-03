import PushNotification from 'react-native-push-notification';
import {navigator} from './index';

const configure = () => {

 PushNotification.configure({

   onRegister: function(token) {
     //process token

     //alert(JSON.stringify(token));
     //Clipboard.setString(JSON.stringify(token))
   },

   onNotification: function(notification) {
     navigator.navigate('screen.screen2');
    //notification.finish(PushNotificationIOS.FetchResult.NoData)
    // notification.finish(PushNotificationIOS.FetchResult.NoData);
   },

   senderID: 'YOUR SENDER ID',

   permissions: {
     alert: true,
     badge: true,
     sound: true
   },

   popInitialNotification: true,
   requestPermissions: true,

 });
};

const localNotification = () => {
    PushNotification.localNotification({
      autoCancel: true,
      largeIcon: "ic_launcher",
      smallIcon: "ic_launcher",
      bigText: "You have an invitation to town hall",
      subText: "Do you want to accept it",
      color: "green",
      vibrate: true,
      vibration: 300,
      title: "Welcome to Reflecx UI Kit",
      message: "Hope you are doing well",
      playSound: true,
      soundName: 'default',
      actions: '["Accept", "Reject"]',
    });
};


export {
 configure,
 localNotification
};