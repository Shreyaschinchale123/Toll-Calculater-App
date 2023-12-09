// src/components/RouteVisualization.js
import React from 'react';
import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
import { useSelector } from 'react-redux';

function RouteVisualization() {
  const route = useSelector((state) => state.route);

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Polyline positions={route} />
    </MapContainer>
  );
}

export default RouteVisualization;
