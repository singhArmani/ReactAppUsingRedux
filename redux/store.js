/**
 * Created by singh on 25/07/2016.
 */


//configuring our store here

//TODO: add middleware

import { applyMiddleware,compose, createStore } from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'

let finalCreateStore = compose(
    applyMiddleware(logger())
)(createStore)

export  default function configureStore(initialState= {todos:[]}) {
    return finalCreateStore(reducer,initialState);
}