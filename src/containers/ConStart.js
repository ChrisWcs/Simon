import { connect } from 'react-redux';
import StartButton from '../components/StartButton';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
    startFunc: () => { dispatch();}
});

const ConStart = connect(mapStateToProps, mapDispatchToProps)(StartButton);

export default ConStart;