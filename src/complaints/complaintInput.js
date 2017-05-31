import React, { Component } from 'react';
import { addComplaint, addMarker} from './complaint_actions'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'
import google from 'react-google-map';
import { prom } from 'react-promise'

const MY_API_KEY = "AIzaSyB89mW-vaS_-rfGylcHqyHBd_i3pRyM1hY"


class ComplaintInput extends Component {
  constructor(props){
    super(props)

    this.state = {
      house_number: '',
      house_street: '',
      zip_code: ''
    }
  }

  componentWillMount(){
    
  }

  codeAddress(geocoder, address) {
    let prom = new Promise(function(resolve, reject){
      var geocoder = new window.google.maps.Geocoder();
      console.log('geocoder created')
      geocoder.geocode( { 'address' : address }, function( results, status ) {
        if( status == window.google.maps.GeocoderStatus.OK ) {
           console.log('conversion success')
          resolve( results )
        } else {
           console.log('error')
          reject( 'Geocode was not successful for the following reason: ' + status  )
        }
      });
    });
    return prom;
  }

  parseCoordinates(response){
    return {
      lat: response[4].geometry.location.lat(), 
      lng: response[4].geometry.location.lng()
    }
  }

  getLocation(house, street, zip){
    var address = `${house} ${street}, ${zip}`;
    this.codeAddress(address).then( (response) => {
      console.log(response)
      var coordinates = this.parseCoordinates(response);
      this.props.addMarker(coordinates)
    })
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    const {house_number, house_street, zip_code} = this.state;


    this.getLocation(house_number, house_street, zip_code);

    this.props.addComplaint(this.state)

    this.setState({
      house_number: '',
      house_street: '',
      zip_code: ''
    })
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
    addComplaint, addMarker
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ComplaintInput);
