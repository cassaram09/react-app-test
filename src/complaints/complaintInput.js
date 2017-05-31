import React, { Component } from 'react';
import { addComplaint } from './complaint_actions'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'


class ComplaintInput extends Component {
  constructor(props){
    super(props)

    this.state = {
      house_number: '',
      house_street: '',
      zip_code: ''
    }
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({
      house_number: '',
      house_street: '',
      zip_code: ''
    })
    this.props.addComplaint(this.state)
  }

  render() {

    return (
      <div className="complaint-input">
        <form onSubmit={ (event) => this.handleSubmit(event) }>
          <label>House Number</label>
          <input type="text" name="house_number" value={this.state.house_number} onChange={ (event) => this.handleChange(event) }/>
          <label>House Street</label>
          <input type="text" name="house_street" value={this.state.house_street } onChange={ (event) => this.handleChange(event) }/>
          <label>Zip Code</label>
          <input type="text" name="zip_code" value={this.state.zip_code} onChange={ (event) => this.handleChange(event) }/>
          <input type="submit"/>
        </form>
        {this.state.house_number}
        {this.state.house_street}
        {this.state.zip_code}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    complaint: state
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    addComplaint
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ComplaintInput);