
import * as actionTypes from '../constants'

const DEFAULT_STATE = {title:"Hello World"}
export default function reducer(state = DEFAULT_STATE, action){
    switch(action.type){
        default:
            return state;
    }
}
