import React from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
    constructor(props){
        super(props);

    }

    RenderList(listItem){
        return (
                <TodoItem key={listItem.id} todo={listItem} />
        );
    }

    render(){
            var todosList = this.props.todos.map((todolistItem)=> this.RenderList(todolistItem));
            return (
                <ul>
                    {todosList}
                </ul>
            );

    }
}