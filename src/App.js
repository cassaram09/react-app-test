import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state={
      complaints: []
    }
  }

  componentDidMount(){
    fetch('https://data.cityofnewyork.us/resource/muk7-ct23.json?$$app_token=zA2KvXZaMng7Jr0mNekDIChOA').then(
      response =>{
        console.log(response)
        return response.json()
      }).then( response => {
        console.log(response)
        this.setState({complaints: response})
      })
  }

  render() {
    const complaints = this.state.complaints.map( (complaint, index) =>{
      return <div key={index}> {complaint.status} </div>
    })
    return (
      <div className="App">
        {complaints}
      </div>
    );
  }
}

export default App;
