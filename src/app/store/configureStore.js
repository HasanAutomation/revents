import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from "./rootReducer";

import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'


export const configureStore=()=>{
   return createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))
}