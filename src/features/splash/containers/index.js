
import Splash from '../components/splash'
import {connect} from 'react-redux'
import * as actions from '../actions'
import * as actionsNav from '../../../navigation/actions'
import { bindActionCreators } from 'redux';
import { getTheme, getStyles, getPushNotificationLink } from '../selectors';
const mapStateToProps = (state) => ({
    ...getTheme(state),
    ...getStyles(state),
    ...getPushNotificationLink(state)
});
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(actions, dispatch),
    ...bindActionCreators(actionsNav,dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(Splash);
