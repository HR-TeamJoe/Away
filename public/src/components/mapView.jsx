import React from 'react';
import axios from 'axios';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

// harded latlong for Madrid, Spain to maintain worldmap center
const url = 'https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=';
const center = [40.416775, -3.703790];
const zoom = 2;

class MapView extends React.Component {
  constructor(props) {
    super(props);
    this.handlePopupClick = this.handlePopupClick.bind(this);
    this.state = {
      mapboxKey: ''
    };
  }

  componentWillMount() {
    axios.get('/config/mapbox')
      .then(results => this.setState({ mapboxKey: results.data }));
  }

  handlePopupClick(destination) {
    console.log('handlePopupClick: ', destination.city.city);
  }

  render() {
    const destinations = this.props.destinations;
    const Markers = destinations.map(destination =>
      (<Marker position={[destination.city.lat, destination.city.long]} key={destination.city.key}>
        <Popup>
          <div>
            <span
              role="presentation"
              onClick={() => this.handlePopupClick(destination)}
            >
              {destination.city.city}
            </span>
          </div>
        </Popup>
      </Marker>)
    );

    if (this.state.mapboxKey === '') {
      return <div style={{ height: '50vh' }}>Loading...</div>;
    }

    return (
      <div className="row center-xs map">
        <Map
          className="col-xs-10"
          center={center}
          zoom={zoom}
          style={{ height: '50vh' }}
          scrollWheelZoom={false}
        >
          <TileLayer
            url={url + this.state.mapboxKey}
            attribution="<attribution>"
          />
          {Markers}
        </Map>
      </div>
    );
  }
}

export default MapView;
