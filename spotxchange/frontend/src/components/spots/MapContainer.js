// import React from "react";
// import { render } from "react-dom";
// import GoogleMap from "google-maps-react";
//
// const GOOGLE_API_KEY = "AIzaSyAeCT8g-wfhRG_8q8AwHkD9CjBCeNPpq0g";
//
// class MapContainer extends React.Component {
//   render() {
//     const { center, zoom } = this.props;
//     return (
//       <div style={{ width: "100%", height: "100%" }}>
//         <GoogleMap
//           bootstrapURLKeys={{ key: "AIzaSyAeCT8g-wfhRG_8q8AwHkD9CjBCeNPpq0g" }}
//           center={center}
//           zoom={zoom}
//         />
//       </div>
//     );
//   }
// }
//
// class MapUpdate extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       center: {
//         lat: 37.7824134,
//         lng: -122.4088472
//       },
//       form: {
//         lat: 37.7824134,
//         lng: -122.4088472
//       }
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleClick = this.handleClick.bind(this);
//   }
//
//   handleChange() {
//     this.setState({
//       form: {
//         lat: Number(this.refs.lat.value),
//         lng: Number(this.refs.lng.value)
//       }
//     });
//   }
//
//   handleClick() {
//     this.setState({
//       center: this.state.form
//     });
//   }
//
//   render() {
//     const center = this.state.center;
//     return (
//       <div style={{ width: "100%", height: "100%" }}>
//         <div>
//           <input
//             ref="lat"
//             type="text"
//             value={this.state.form.lat}
//             onChange={this.handleChange}
//           />
//           <input
//             ref="lng"
//             type="text"
//             value={this.state.form.lng}
//             onChange={this.handleChange}
//           />
//           <input onClick={this.handleClick} type="button" value="update" />
//         </div>
//         <div style={{ width: "100%", height: "100%" }}>
//           <GMapReact center={center} zoom={15} />
//         </div>
//       </div>
//     );
//   }
// }
// render(
//   <div style={{ width: "100%", height: "500px" }}>
//     <MapUpdate />
//   </div>,
//   document.getElementById("root")
// );
//
// export default MapContainer;

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

// import React, { Component } from "react";
// import { GoogleApiWrapper } from "google-maps-react";
// import Map from "./Map";
//
// export class MapContainer extends Component {
//   render() {
//     const style = {
//       width: "100vw",
//       height: "100vh"
//     };
//     return (
//       <div style={style}>
//         <Map google={this.props.google} />
//       </div>
//     );
//   }
// }
//
// export default GoogleApiWrapper({
//   apiKey: "AIzaSyAeCT8g-wfhRG_8q8AwHkD9CjBCeNPpq0g"
// })(MapContainer);
