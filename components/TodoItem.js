/**
 * Created by singh on 26/07/2016.
 */
import React from 'react'

export default class TodoItem extends React.Component {
    constructor(props){
        super(props);
    }

    deleteItem(id){
        //delete  Item logic
    }

    markCompleted(id){
        //mark completed item logic
    }

    render(){
        //creating styles..
        var myStyle ={fontSize:'10px',float:'right'};

        return (
            <li>
                <h4>{this.props.todo.text}
                    <button onClick={this.deleteItem.bind(this)} style={myStyle} className="btn btn-danger btn-xs">Delete Item</button>
                    <button onClick ={this.markCompleted.bind(this)} style={myStyle} className="btn btn-primary btn-xs">Mark Completed</button>
                </h4>
            </li>
        );
    }
}