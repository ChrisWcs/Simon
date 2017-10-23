import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import mainReducer from './reducers/mainReducer';

const App = () => (
    <Provider store={createStore(mainReducer, applyMiddleware(thunk))} >
        <div>
        </div>
    </Provider>
);

export default App;