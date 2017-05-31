import React, { Component } from 'react';

class ComplaintInput extends Component {
  constructor(props){
    super(props)

    this.state = {
      complaint: ''
    }
  }

  handleChange(e){
    this.setState({complaint: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    alert('submitted!')
    this.setState({complaint: ''})
  }
  render() {

    return (
      <div className="complaint-input">
        <form onSubmit={ (event) => this.handleSubmit(event) }>
          <input type="text" value={this.state.complaint} onChange={ (event) => this.handleChange(event) }/>
        </form>
        {this.state.complaint}
      </div>
    );
  }
}

export default ComplaintInput;