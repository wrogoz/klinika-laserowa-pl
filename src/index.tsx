import React from 'react';
import './style.css'
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import mystore from './redux/store/store'
import App from './App';
import * as serviceWorker from './serviceWorker';

const store=mystore();
const root = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(
    root,
    document.getElementById('root'));


serviceWorker.unregister();
