import React, {PropTypes} from "react"
import GoogleMap from "react-google-map"
import GoogleMapLoader from "react-google-maps-loader"
 
const MY_API_KEY = "AIzaSyB89mW-vaS_-rfGylcHqyHBd_i3pRyM1hY"

class MapComponent extends React.Component {

  render(){
    return (
      <div className="map">
        <GoogleMap
          googleMaps={this.props.googleMaps}
          coordinates={this.props.locations}
          center={{lat: 40.6127837, lng: -74.00594130000002}}
          zoom={12}
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
