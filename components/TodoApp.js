/**
 * Created by singh on 24/07/2016.
 */
import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList'
import { connect } from 'react-redux'

class TodoApp extends React.Component {
    constructor(props){
        super(props);

    }


    render(){
        return (
            <div>
                <h1>Todo List</h1>
                <TodoInput dispatch ={this.props.dispatch}/>
                <TodoList  dispatch ={this.props.dispatch} todos={this.props.todos}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

//using connect

export default connect(mapStateToProps)(TodoApp)