import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const url = 'https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamVubnljY2MiLCJhIjoidFU1UlFIUSJ9.8TdFuiE43mwI0Pz1MnOA2A';
// harded latlong for Madrid, Spain to maintain worldmap center
const center = [40.416775, -3.703790];
const zoom = 2;

class MapView extends React.Component {
  constructor(props) {
    super(props);
    this.handlePopupClick = this.handlePopupClick.bind(this);
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
            url={url}
            attribution="<attribution>"
          />
          {Markers}
        </Map>
      </div>
    );
  }
}

export default MapView;
