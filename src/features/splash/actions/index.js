import { UPDATE_GLOBAL_STYLES } from "../constants";

export function UpdateGlobalTheme(styles){
    return{type:UPDATE_GLOBAL_STYLES, payload:styles}
}