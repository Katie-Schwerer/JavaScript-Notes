import './App.css';
import "leaflet/dist/leaflet.css";

import {CircleMarker, MapContainer, Popup, TileLayer} from "react-leaflet";
// import MarkerClusterGroup from "react-leaflet-cluster";
import React from 'react';

function App() {

  const markers = [
    {
      geocode: [35.83432, -78.62809],
      popUp: "St. Albans Lofts",
    },
    {
      geocode: [34.35431, -79.46623],
      popUp: "Location #2",
    },
    {
      geocode: [36.46132, -77.33234],
      popUp: "Location #3",
    }
  ];

  return (
    <div className="App">
      <h1>Hello World</h1>
      <MapContainer center={[35.83432, -78.62809]} zoom={13}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
        

        {markers.map((marker, index) => (
          <CircleMarker key={index} center={marker.geocode} radius={10} fillColor='blue' color="blue" fillOpacity={0.8}>
            <Popup>
              <p>{marker.popUp}</p>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
}

export default App;
