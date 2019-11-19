import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as toastrReducer } from 'react-redux-toastr'
import ReduxToastr from 'react-redux-toastr'

import './index.css';
import './App.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as reducer from './Store/Reducer';

let composeEnhancers = compose;

if (process.env.NODE_ENV === 'development') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const rootReducer = combineReducers({
    toastr: toastrReducer,
    matchData: reducer.matchDataReducer,
});
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

// store.dispatch = addPromiseSupportToDispatch(store);

const app = (
    <Provider store={store}>
        <ReduxToastr />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
