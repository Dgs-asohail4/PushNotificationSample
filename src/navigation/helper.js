
import React from 'react'
import { NavigationActions, StackActions } from 'react-navigation';


export const ChangeDrawerScreen = (props, navigateTo, title, showHeader) => {
    props.changeScene(navigateTo);


    const subAction = StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName: navigateTo,
          }),
        ],
      });

    props.navigation.dispatch(
      NavigationActions.navigate({
        routeName: navigateTo,
        action: subAction,
      })
    );

    props.navigation.toggleDrawer();

};

export const PushNewScreen = (props, navigateTo, title, showHeader) => {
  props.changeScene(navigateTo);
  props.navigation.navigate(navigateTo);
}

export const ChangeStack = (props, navigateTo,title, showHeader) => {
    props.changeScene(navigateTo);

    const resetAction = StackActions.reset({
            index: 0,
            key: null,
            actions: [NavigationActions.navigate({ routeName: navigateTo })],
        });
    props.navigation.dispatch(resetAction);
}

export const PopScreen = (props) => {
  props.navigation.goBack()
}
