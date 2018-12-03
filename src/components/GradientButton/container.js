
import GradientButton from './index.js'
import {connect} from 'react-redux'
import * as actionsNav from '../../navigation/actions'
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => ({
    theme : state.nav.theme,
    globalStyles : state.splash.globalTheme
});

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(actionsNav,dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(GradientButton);

