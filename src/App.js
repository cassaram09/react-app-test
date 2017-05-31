import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { data } from './data.js'

class App extends Component {
  constructor(){
    super()

    this.state = {
      complaints: data
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
  }

  render() {
    const complaints = this.state.complaints.map( (complaint, index) =>{
      return <div key={index}> {complaint.Status} </div>
    })
    return (
      <div className="App">
        {complaints}
      </div>
    );
  }
}

export default App;
