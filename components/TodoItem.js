/**
 * Created by singh on 26/07/2016.
 */
import React from 'react'
import actions from '../redux/action'

export default class TodoItem extends React.Component {
    constructor(props){
        super(props);
    }

    deleteItem(){

        this.props.dispatch(actions.deleteTodo(this.props.todo.id)); //removing the item
    }

    markCompleted(){
        this.props.dispatch(actions.completeTodo(this.props.todo.id));
    }

    render(){
        //creating styles..
        var myStyle ={fontSize:'10px',float:'right'};
        var smallStyle = {fontSize:'8px', paddingLeft:'5px'}

        return (
            <li>
                <h4>{this.props.todo.text} <small style={smallStyle}>{this.props.todo.completed ? 'Completed' : 'Not Completed'}</small>
                    <button onClick={this.deleteItem.bind(this)} style={myStyle} className="btn btn-danger btn-xs">Delete Item</button>
                    <button  onClick ={this.markCompleted.bind(this)} style={myStyle} className="btn btn-primary btn-xs">
                        Mark as {this.props.todo.completed ? 'UnCompleted' : 'Completed'}
                    </button>
                </h4>
            </li>
        );
    }
}