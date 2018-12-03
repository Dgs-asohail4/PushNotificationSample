import { combineReducers } from 'redux';
import nav, * as fromNav from '../navigation/reducers'
import login, * as fromLogin from '../features/login/reducers'
import splash from '../features/splash/reducers'

const rootReducer = combineReducers({
    nav,
    login,
    splash,
});

export default rootReducer;


export const getNav = (state) =>
    fromNav.getScene(state.scene)

export const getHome = (state) =>
    fromHome.getTitle(state.title);