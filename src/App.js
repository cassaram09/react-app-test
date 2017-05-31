import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { data } from './data.js'
import Complaints from './components/complaints'

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
    
    return (
      <div className="App">
        <Complaints complaints={this.state.complaints} />
      </div>
    );
  }
}

export default App;
