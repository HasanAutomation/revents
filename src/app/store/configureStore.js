import {devToolsEnhancer} from 'redux-devtools-extension';
import rootReducer from "./rootReducer";

const { createStore } = require("redux")


export const configureStore=()=>{
   return createStore(rootReducer,devToolsEnhancer())
}