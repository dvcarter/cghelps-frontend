import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router } from "react-router-dom";
import { createBrowserHistory, createHashHistory } from 'history'
import { Provider } from "react-redux";
import './index.css';
import App from './App';
import {loadPosts} from "./postActions";
import { push } from "react-router-redux"
import configureStore from "./configureStore";
import { ConnectedRouter } from "react-router-redux"

export const store = configureStore();
store.dispatch(loadPosts());
store.dispatch(push("/"));


const history = createHashHistory()

const router = (
        <BrowserRouter history={history}>
                <App />
        </BrowserRouter>
)



const rootEl = document.getElementById('root');


let render = () => {

    ReactDOM.render(
            <Provider store={store}>
                {router}
            </Provider>, 
            rootEl
    );
}

if (module.hot) {
    const renderApp = render;
    const renderError = (error) => {
        const RedBox = require('redbox-react').default;
        ReactDOM.render(
                <RedBox error={error} />, 
                rootEl,
        );  
    };  

    render = () => {
        try {
            renderApp();
        }   
        catch(error) {
            console.error(error);
            renderError(error);
        }   
    };  

    // App from ./app/layout/App
    module.hot.accept(App, () => {
        setTimeout(render);
    });
}

render();

