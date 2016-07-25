import React from 'react';

export default class TodoList extends React.Component {
    constructor(props){
        super(props);

    }

    RenderList(list){
        return (
                <li key={list.id}><h4>{list.text} <small>{list.completed ? 'Completed' : 'Not Completed'}</small></h4></li>
        );
    }

    render(){
            var todosList = this.props.todos.map((todolist)=> this.RenderList(todolist));
            return (
                <ul>
                    {todosList}
                </ul>
            );

    }
}