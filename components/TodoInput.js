import React from 'react';

export default class TodoInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {taskName:''}; //intial state
        this.handleChangeEvent = this.handleChangeEvent.bind(this);
    }

    //declaring the change event  handler
    handleChangeEvent(event){
        this.setState({taskName:event.target.value});
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
            </form>
        );
    }
}