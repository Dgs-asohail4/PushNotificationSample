
import Button from './index.js'
import {connect} from 'react-redux'
import * as actionsNav from '../../navigation/actions'
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(actionsNav,dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(Button);

