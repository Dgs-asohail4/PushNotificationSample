import * as actionTypes from '../constants'
import { DEFUALT_THEME, DARK_THEME } from '../../global/config';

const DEFAULT_STATE = {scene:"app.splash",theme:DEFUALT_THEME}
export default function reducer(state = DEFAULT_STATE, action){
    console.log(action)
    switch(action.type){
        case actionTypes.CHANGE_SCENE:
            return {...state, scene:action.payload}
        case actionTypes.CHANGE_THEME:
            return {...state, theme:action.payload}
        default:
            return state;
    }
}
