import {connect} from 'react-redux';
import {} from '../actions/actions';

import SimonButton from '../components/SimonButton';

const mapStateToProps = (state, ownProps) => ({
    color: state.highlighted.c1 ? ownProps.high : ownProps.norm,
    radius: ownProps.radius,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    func: () => { dispatch(); }
});

const ConSimon = connect( mapStateToProps, mapDispatchToProps )(SimonButton);

export default ConSimon;