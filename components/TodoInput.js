import React from 'react';
import actions from '../redux/action'

export default class TodoInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {taskName:''}; //intial state
        this.handleChangeEvent = this.handleChangeEvent.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //declaring the change event  handler
    handleChangeEvent(event){
        this.setState({taskName:event.target.value});
    }

    //handling submit event
    handleSubmit(event){
        event.preventDefault();
        console.log(this.props);
        this.props.dispatch(actions.addTodo(this.state.taskName));
    }

    render(){
        return (
            <form>
                <div className="form-group">
                    <input className="form-control"
                           type="text"
                            placeholder="Enter your task ..."
                            value={this.state.taskName}
                            onChange = {this.handleChangeEvent}/>
                </div>
                <button className="btn btn-success"
                        onClick={this.handleSubmit}>Submit</button>
            </form>
        );
    }
}