import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'
import logo from './logo.svg';
import './App.css';
import { data } from './data.js'

import Complaints from './complaints/complaints'
import { addComplaint } from './complaints/complaint_actions'
import MapComponent from './map/map_component'


class App extends Component {
  constructor(){
    super()

    this.state = {
      complaints: [],
      locations: []
    }
  }

  componentDidMount(){
    // fetch('https://data.cityofnewyork.us/resource/muk7-ct23.json?$$app_token=zA2KvXZaMng7Jr0mNekDIChOA').then(
    //   response =>{
    //     console.log(response)
    //     return response.json()
    //   }).then( response => {
    //     console.log(response)
    //     this.setState({complaints: response})
    //   })
    data.forEach( complaint => (
      this.props.addComplaint(complaint)
    ))
  }

  render() {
    
    return (
      <div className="App">
        <MapComponent locations={this.props.locations}/>
        <Complaints complaints={this.props.complaints} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    complaints: state.complaints,
    locations: state.locations
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    addComplaint
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
