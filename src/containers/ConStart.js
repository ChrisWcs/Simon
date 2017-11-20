import { connect } from 'react-redux';
import StartButton from '../components/StartButton';
import { createStart } from '../actions/actionCreators';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
    startFunc: () => { dispatch(createStart());}
});

const ConStart = connect(mapStateToProps, mapDispatchToProps)(StartButton);

export default ConStart;