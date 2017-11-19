import {connect} from 'react-redux';
import {} from '../actions/actionCreators';

import SimonButton from '../components/SimonButton';

const mapStateToProps = (state, ownProps) => ({
    color: state.highlighted.c1 ? ownProps.high : ownProps.norm,
    radius: ownProps.radius,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    clickFunc: () => { dispatch(createAddToPattern(ownProps.cNum)); }
});

const ConSimon = connect( mapStateToProps, mapDispatchToProps )(SimonButton);

export default ConSimon;