import React, { Component } from 'react';
import './MapContainer.css';

import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%'
  };

class MapContainer extends Component {

    render() {
        return (
            <div className="MapContainer">
                <Map
                google={this.props.google}
                style={mapStyles}
                zoom={12}
                initialCenter={{ lat: 47.444, lng: -122.176}}
                />
            </div>
        );
    }
}    
    
export default GoogleApiWrapper({
    apiKey: 'AIzaSyALlOwHrQiaE9FeKWBi-3BdjgwoJwkbG_8'
  })(MapContainer);