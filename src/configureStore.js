import {createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";

import rootReducer from "./rootReducer";

export default function configureStore(preloadedState) {
    const middlewares = [thunk];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const storeEnhancers = [middlewareEnhancer];


    const composedEnhancer = composeWithDevTools(...storeEnhancers);
    
    const store = createStore(
            rootReducer,
            preloadedState,
            composedEnhancer
    );  

    if(process.env.NODE_ENV !== "production") {
        if(module.hot) {
            module.hot.accept("./rootReducer", () => {
                const newRootReducer = require("./rootReducer").default;
                store.replaceReducer(newRootReducer)
            }); 
        }   
    }   

    return store;
}

