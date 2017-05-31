import React, {PropTypes} from "react"
import GoogleMap from "react-google-map"
import GoogleMapLoader from "react-google-maps-loader"
 
import styles from "../index.css"
 
const MY_API_KEY = "AIzaSyB89mW-vaS_-rfGylcHqyHBd_i3pRyM1hY"

const locations = [
  {position: {lat: -31.563910, lng: 147.154312}},
  {position: {lat: -33.718234, lng: 150.363181}},
  {position: {lat: -33.727111, lng: 150.371124}},
  {position: {lat: -33.848588, lng: 151.209834}},
  {position: {lat: -33.851702, lng: 151.216968}},
  {position: {lat: -34.671264, lng: 150.863657}},
  {position: {lat: -35.304724, lng: 148.662905}},
  {position: {lat: -36.817685, lng: 175.699196}},
  {position: {lat: -36.828611, lng: 175.790222}},
  {position: {lat: -37.750000, lng: 145.116667}},
  {position: {lat: -37.759859, lng: 145.128708}},
  {position: {lat: -37.765015, lng: 145.133858}},
  {position: {lat: -37.770104, lng: 145.143299}},
  {position: {lat: -37.773700, lng: 145.145187}},
  {position: {lat: -37.774785, lng: 145.137978}},
  {position: {lat: -37.819616, lng: 144.968119}},
  {position: {lat: -38.330766, lng: 144.695692}},
  {position: {lat: -39.927193, lng: 175.053218}},
  {position: {lat: -41.330162, lng: 174.865694}},
  {position: {lat: -42.734358, lng: 147.439506}},
  {position: {lat: -42.734358, lng: 147.501315}},
  {position: {lat: -42.735258, lng: 147.438000}},
  {position: {lat: -43.999792, lng: 170.463352}}
]

class MapComponent extends React.Component {

  constructor(props){
    super(props)
  }

  componentWillMount(){

  }

  componentWillReceiveProps(nextProps){
    
  }
  
  render(){
    return (
      <div className="map">
        <GoogleMap
          googleMaps={this.props.googleMaps}
          coordinates={locations}
          center={{lat: -31.563910, lng: 147.154312 }}
          zoom={4}
          onLoaded={(googleMaps, map) => {
            map.setMapTypeId(googleMaps.MapTypeId.ROADMAP)
          }}
        />
      </div>
    )
  }
}
 
MapComponent.propTypes = {
  googleMaps: PropTypes.object.isRequired,
}
 
export default GoogleMapLoader(MapComponent, {
  libraries: ["places"],
  key: MY_API_KEY,
})
