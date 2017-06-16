import React from 'react'
import ReactDOM from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const url = 'https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamVubnljY2MiLCJhIjoidFU1UlFIUSJ9.8TdFuiE43mwI0Pz1MnOA2A'
const position = [40.750487, -73.976401]
const zoom = 12;

const markers = [
  {
    name: 'New York',
    latlng: [40.750487, -73.976401]
  }, {
    name: 'Görlitzer Park',
    latlng: [52.496912, 13.436738]
  }, {
    name: 'webkid',
    latlng: [52.501106, 13.422061]
  }
];

class MapView extends React.Component {
  constructor(props) {
    super(props)
  }
  
	render() {
		const Markers = markers.map(marker => (
      <Marker position={marker.latlng} key={`marker_${marker.name}`}>
        <Popup>
          <span>{marker.name}</span>
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