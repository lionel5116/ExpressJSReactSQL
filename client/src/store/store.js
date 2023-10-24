import {createStore,applyMiddleware} from  'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import allReducers from '../reducers/index';
import thunk from 'redux-thunk';

import { configureStore } from '@reduxjs/toolkit'

const initialState = {};

const middleware = [thunk];

export const store  = createStore(
    allReducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);


/*
//https://redux-toolkit.js.org/tutorials/quick-start
export const store = configureStore({
    reducer: {allReducers},
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  })
  */