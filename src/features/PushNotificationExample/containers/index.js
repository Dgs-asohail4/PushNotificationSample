import PushNotification from '../components/PushNotificationExample'
import {connect} from 'react-redux'
import * as actions from '../actions'
import * as actionsNav from '../../../navigation/actions'
import * as actionSplash from '../../splash/actions'

import { bindActionCreators } from 'redux';
import { getTheme, getStyles } from '../selectors';

const mapStateToProps = (state) => ({
...getTheme(state),
...getStyles(state)
});
const mapDispatchToProps = (dispatch) => ({
...bindActionCreators(actions, dispatch),
...bindActionCreators(actionsNav,dispatch),
...bindActionCreators(actionSplash,dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(PushNotification);