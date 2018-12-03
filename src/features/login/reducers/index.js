
import {types} from '../constants'

const DEFAULT_STATE = {
    title:"Hello World",
    login:false,
    loading : false,
    error:false,
    user:'chad',
    errorMessage: "",
    payload :{}
}
export default function reducer(state = DEFAULT_STATE, action){
    switch(action.type){
        default:
            return state;
    }
}
