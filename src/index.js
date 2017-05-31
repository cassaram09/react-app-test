import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import manageComplaints from './reducers/manageComplaints'


export const configureStore = () => {
  return createStore(manageComplaints, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>, 
  document.getElementById('root')
  
);

registerServiceWorker();
