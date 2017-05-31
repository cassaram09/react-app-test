import React, { Component } from 'react';
import { addComplaint } from './complaint_actions'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'


class ComplaintInput extends Component {
  constructor(props){
    super(props)

    this.state = {
      complaint_number: ''
    }
  }

  handleChange(e){
    this.setState({complaint_number: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({complaint_number: ''})
    this.props.addComplaint(this.state)
  }

  render() {

    return (
      <div className="complaint-input">
        <form onSubmit={ (event) => this.handleSubmit(event) }>
          <input type="text" value={this.state.complaint_number} onChange={ (event) => this.handleChange(event) }/>
        </form>
        {this.state.number}
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