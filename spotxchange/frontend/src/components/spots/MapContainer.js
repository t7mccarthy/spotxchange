import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  }
  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  render() {
    if (!this.props.google) {
      return <div>Loading...</div>;
    }

    return (
      <div
        style={{
          position: "relative",
          height: "calc(100vh - 20px)"
          // center: center_pt
        }}
      >
        <Map
          style={{}}
          google={this.props.google}
          zoom={14}
          initialCenter={{ lat: 37.865693, lng: -122.256122 }}
          center={{ lat: 37.865693, lng: -122.256122 }}
        >
          <Marker
            onClick={this.onMarkerClick}
            icon={{
              url: "",
              anchor: new google.maps.Point(32, 32),
              scaledSize: new google.maps.Size(64, 64)
            }}
            name={"Current location"}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyAeCT8g-wfhRG_8q8AwHkD9CjBCeNPpq0g",
  v: "3.30"
})(MapContainer);
