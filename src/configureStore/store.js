import {accountReducer} from "../reducer/accountReducer.js";
import {applyMiddleware, legacy_createStore as createStore} from "redux";
import {loggerEnhancer} from "../enhancer/loggerEnhancer.js";
import {thunkEnhancer} from "../enhancer/thunkEnhancer.js";

const initialState = {
    balance: 0,
    quote: 'Winter is coming...'
}

export const store = createStore(accountReducer, initialState, applyMiddleware(thunkEnhancer, loggerEnhancer));