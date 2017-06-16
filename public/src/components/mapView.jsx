import React from 'react'
import ReactDOM from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const url = 'https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamVubnljY2MiLCJhIjoidFU1UlFIUSJ9.8TdFuiE43mwI0Pz1MnOA2A'
const position = [40.750487, -73.976401]
const zoom = 12;

// /////////////////////////////////
// { city: 'New York, New York',
//     city_id: 1,
//     lat: 40.7128,
//     long: -74.0059,
//     visits: 1,
//     key: '1' }
// /////////////////////////////////

const markers = [
  {
    city: 'city 1',
    latlng: [40.750487, -73.976401]
  }, {
    city: 'city 2',
    latlng: [50, -10]
  }, {
    city: 'city 3',
    latlng: [60, -20]
  },
  {
    city: 'city 4',
    latlng: [70, -30]
  },
  {
    city: 'city 5',
    latlng: [80, -40]
  }
];

class MapView extends React.Component {
  constructor(props) {
    super(props)
  }
  
	render() {
		const Markers = markers.map(marker => (
      <Marker position={marker.latlng} key={`marker_${marker.city}`}>
        <Popup>
          <span>{marker.city}</span>
        </Popup>
      </Marker>
    ));

		return (
			<div>
				<Map
					style={{height: "100vh"}}
					center={position}
					zoom={zoom}>
					<TileLayer
						url={url}
						attribution="<attribution>" />
					{Markers}
				</Map>
			</div>
		)
	}
}

export default MapView