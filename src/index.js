import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {createLogger} from "redux-logger";
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import App from './containers/App';
import {searchRobots} from "./reducers";

const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(logger))

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
