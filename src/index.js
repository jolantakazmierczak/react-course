import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore, combineReducers} from 'redux';
import {createLogger} from "redux-logger";
import thunkMiddleware from 'redux-thunk';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import App from './containers/App';
import {searchRobots, requestRobots} from "./reducers";

const logger = createLogger();
const rootReducer = combineReducers({searchRobots, requestRobots});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
    <React.StrictMode>
        <div>
            <Provider store={store}>
                <App/>
            </Provider>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);


reportWebVitals();
