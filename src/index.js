import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import App from './containers/App';
import {searchRobots} from "./reducers";

const store = createStore(searchRobots)

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
