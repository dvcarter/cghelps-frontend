import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory'
import { Provider } from "react-redux";
import './index.css';
import App from './App';
import {loadPosts} from "./postActions";
import configureStore from "./configureStore";

const history = createBrowserHistory()

const store = configureStore();
store.dispatch(loadPosts());


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

