import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import complaintsReducer from './complaints/complaints_reducer'
import mapReducer from './map/map_reducer'

const rootReducer = combineReducers({complaints: complaintsReducer, locations: mapReducer})

export const configureStore = () => {
  return createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>, 
  document.getElementById('root')
  
);

registerServiceWorker();
