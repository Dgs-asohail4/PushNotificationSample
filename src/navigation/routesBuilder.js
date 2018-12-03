import {Routes} from './routes';
import React from 'react'
import {createStackNavigator} from 'react-navigation'
import NavBar  from '../components/Navbar/container';


const renderHeader = (navigation, props,title, drawer) => {
    return (
      <NavBar title={title} navigation={navigation} headerProps={props} drawer={drawer}/>
    );
};

const generateStack = (routeName, title, showHeader = true, showDrawer = true, parent = null, headerMode = 'screen') => {
    var route;
    if(parent == null)
        route = Routes.find( (x) => x.name == routeName);
    else
        route = Routes.find((y)=>y.name == parent).childrens.find((x)=>x.name == routeName);
    let flatRoutes = {};
    let wrapToRoute = (route, drawer = false, header = true) => {
        return {
          screen: route.screen,
          navigationOptions: ({ navigation }) => {
              if(showHeader){
                  return {
                    gesturesEnabled: false,
                    header: (props) => header ? renderHeader(navigation, props, route.title, drawer) : null,
                  }
              } else {
                  return {
                      headerTitle:'ihihisad',
                      header:null
                  }
              }
         }
      }
    };
    const generateChildeRoutes = (route) => {
        for(let child of route.childrens){
            var showHeaderInNestedRoute = true;
            if(child.name.includes('auth')) showHeaderInNestedRoute = false;
            flatRoutes[child.name] = wrapToRoute(child, undefined, showHeaderInNestedRoute);
            generateChildeRoutes(child);
        }
    }
    flatRoutes[route.name] = wrapToRoute(route,  route.name.includes("menu") ? false :true, true);
    generateChildeRoutes(route);
    // for (let child of route.childrens) {
    //     var showHeaderInNestedRoute = true;
    //     if(child.name.includes('auth')) showHeaderInNestedRoute = false;
    //     if(child.childrens.length>0){
    //     //     flatRoutes[child.name] = //generateStack(child.name, "", true , true,route.name, 'screen');
    //         flatRoutes[child.name] = wrapToRoute(child, undefined, showHeaderInNestedRoute);
    //        for(let childofchild of child.childrens){
    //            showHeaderInNestedRoute = true;
    //            if(child.name.includes('auth')) showHeaderInNestedRoute = false;
    //            flatRoutes[childofchild.name] = wrapToRoute(childofchild, undefined, showHeaderInNestedRoute);
    //        }
    //     } else{
    //         flatRoutes[child.name] = wrapToRoute(child, undefined, showHeaderInNestedRoute);
    //     }
    // }
    const stack =  createStackNavigator(flatRoutes, {
        initialRouteName: route.name,
        headerMode,
        navigationOptions:{
            header:null
        }
    });
    return stack;
}

export {
    generateStack
}
