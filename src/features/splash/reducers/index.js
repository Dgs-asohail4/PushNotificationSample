
import * as actionTypes from '../constants'

import GlobalStyles from '../../../global/styles'

import { DEFUALT_THEME, DARK_THEME } from '../../../global/config';

const DEFAULT_STATE = {
    title:"Hello World",
    globalTheme: GlobalStyles(DEFUALT_THEME),
    pushNotificationLink:false
}
export default function reducer(state = DEFAULT_STATE, action){
    switch(action.type){
        case actionTypes.UPDATE_GLOBAL_STYLES:
            return {...state, globalTheme:action.payload};
        case actionTypes.PUSHNOTIFICATIONLINK:
            return{...state, pushNotificationLink:true}
        default:
            return state;
    }
}
