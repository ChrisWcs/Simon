import {connect} from 'react-redux';
import { createAsyncClick } from '../actions/actionCreators';

import SimonButton from '../components/SimonButton';

const arr = ["c1", "c2", "c3", "c4"];

const mapStateToProps = (state, ownProps) => ({
    color: state.highlighted[arr[ownProps.cNum]] ? ownProps.high : ownProps.norm,
    radius: ownProps.radius,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    clickFunc: () => { dispatch(createAsyncClick(ownProps.cNum)); }
});

const ConSimon = connect( mapStateToProps, mapDispatchToProps )(SimonButton);

export default ConSimon;