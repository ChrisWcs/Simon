import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import mainReducer from './reducers/mainReducer';

import Game from './components/Game';

const App = () => (
    <Provider store={createStore(mainReducer, applyMiddleware(thunk))} >
        <div>
            <Game/>
        </div>
    </Provider>
);

export default App;