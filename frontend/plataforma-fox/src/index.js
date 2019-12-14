import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore} from 'redux';
import rootReducer from './reducers'
import {Provider} from 'react-redux';

const store = createStore(
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); //necessario para redux devtools

// Estrutura do Redux:

// STORE -> um State globalizado

// ACTION -> uma chamada para descrever uma mudança num State (uma função que retorna um objeto)
// REDUCER -> um Listener que salva as mudaças do ACTION na STORE
// DISPATCH -> Despacha as ACTIONs para o REDUCER para que seja salvo na STORE

ReactDOM.render(

    <Provider store={store}>
        <App />
    </Provider>
    
    , document.getElementById('root'));

