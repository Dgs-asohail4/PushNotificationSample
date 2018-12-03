import * as Screens from './screen_name';
const Routes = [
    {
        name:'app.home',
        title:'Grid Menu',
        icon:'md-home',
        screen:Screens.GridV1,
        childrens: []
    },
    {
        name:'auth.login',
        title:'Login',
        icon:'',
        screen:Screens._Login,
        childrens: []
    },
    {
        name:'app.splash',
        title:'Splash',
        icon:'',
        screen:Screens.Splash,
        childrens: []
    },
    {
        name:'app.pushnotification',
        title:'Push Notification',
        icon:'md-notifications-outline',
        screen:Screens.PushNotificationScreen,
        childrens: []
    },
    {
        name:'screen.screen2',
        title:'Screen 2',
        icon:'',
        screen : Screens.Screen2,
        childrens:[]

    }
];

export {
    Routes
}
