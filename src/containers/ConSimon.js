import {connect} from 'react-redux';
import {} from '../actions/actions';

import SimonButton from '../components/SimonButton';

const mapStateToProps = (state) => ({
    color: state.high ? "red" : "green"
});

const mapDispatchToProps = (dispatch) => ({
    func: () => { dispatch(); }
});

const ConSimon = connect( mapStateToProps, mapDispatchToProps )(SimonButton);

export default ConSimon;