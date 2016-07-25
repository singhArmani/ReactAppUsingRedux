/**
 * Created by singh on 8/07/2016.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import TodoApp from '../components/TodoApp.js'
import configureStore from '../redux/store'
import { Provider } from 'react-redux'  // a react component to handle store things; a wrapper

let initialState = {
    todos: [{id:0,
             completed: false,
             text:'Learning Redux'}]
}

//creating our actual store here
let store = configureStore(initialState);


ReactDOM.render(
    <Provider store={store}>
        <TodoApp/>
    </Provider>,document.getElementById('app')
)

