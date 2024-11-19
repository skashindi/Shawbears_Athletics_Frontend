import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

// MapComponent that uses LoadScript to load Google Maps API
const MapComponent = () => {
  const apiKey = 'AIzaSyDA4LYV-yeZWnvb0UNpbZy1nWIc9lFvY20';  // Replace with your API key

  const handleApiLoad = () => {
    console.log('Maps API has loaded.');
  };

  return (
    <LoadScript googleMapsApiKey={apiKey} onLoad={handleApiLoad}>
      <h1>Delivery Tracker</h1>
      <GoogleMap
        id="my-map"
        mapContainerStyle={{ width: '100%', height: '400px' }}
        zoom={10}
        center={{ lat: -33.860664, lng: 151.208138 }}
      >
        {/* You can add markers or other components here */}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;

