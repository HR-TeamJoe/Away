import React from 'react'
import ReactDOM from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const url = 'https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamVubnljY2MiLCJhIjoidFU1UlFIUSJ9.8TdFuiE43mwI0Pz1MnOA2A'
const center = [40.416775, -3.703790] //harded latlong for Madrid, Spain to maintain worldmap center
const zoom = 2;

class MapView extends React.Component {
  constructor(props) {
    super(props)
    this.handlePopupClick = this.handlePopupClick.bind(this)
  }
  
  handlePopupClick(destination) {
    // alert('handlePopupClick: ', destination)
    console.log('handlePopupClick: ', destination.city.city)
  }

	render() {
    const destinations = this.props.destinations
		const Markers = destinations.map(destination => {
      console.log([destination.city.lat, destination.city.long])
      return (
        <Marker position={[destination.city.lat, destination.city.long]} key={destination.city.key}>
        <Popup>
          <div>
          <span onClick={() => this.handlePopupClick(destination)}>{destination.city.city}</span>
          </div>
        </Popup>
        </Marker> 
      )
    });

		return (
			
      <div className="row center-xs map">
				<Map className="col-xs-10"
          // ref={m => { this.leafletMap = m; }}
					center={center}
					zoom={zoom}
          style={{height: "50vh"}}
          scrollWheelZoom={false}>
					<TileLayer
						url={url}
						attribution="<attribution>" />
					{Markers}
				</Map>
			</div>
      
		)
	}
}

// Create our own class, extending from the Marker class
// so that we can have the popup be always open and info shown 
// to reverse to normal, change the ExtendedMarker tag on top to Marker (default)
class ExtendedMarker extends Marker {
  componentDidMount() {
    super.componentDidMount()
    this.leafletElement.openPopup()
  }
}

export default MapView

// /////////////////////////////////
// { city: 'New York, New York',
//     city_id: 1,
//     lat: 40.7128,
//     long: -74.0059,
//     visits: 1,
//     key: '1' }
// /////////////////////////////////

// const markers = [
//   {
//     city: 'city 1',
//     latlng: [40.750487, -73.976401]
//   }, {
//     city: 'city 2',
//     latlng: [50, -10]
//   }, {
//     city: 'city 3',
//     latlng: [60, -20]
//   },
//   {
//     city: 'city 4',
//     latlng: [70, -30]
//   },
//   {
//     city: 'city 5',
//     description: 'test test test test test text',
//     latlng: [80, -40]
//   }
// ];