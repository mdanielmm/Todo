import React, { Component } from 'react';

class AddForm extends Component {
    state = {
        content: ""
    }
    
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        e.target.reset();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/*<label>Add new todo:</label>*/}
                    <input className="inputnewtodo" type="text" placeholder=" Add new thing to do" 
                        onChange={this.handleChange} />
                </form>
            </div>
        );
    }
}

export default AddForm;