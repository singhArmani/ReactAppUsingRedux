/**
 * Created by singh on 24/07/2016.
 */
import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList'
export default class TodoApp extends React.Component {
    constructor(props){
        super(props);

    }


    render(){
        return (
            <div>
                <TodoInput/>
                <TodoList/>
            </div>
        );
    }
}