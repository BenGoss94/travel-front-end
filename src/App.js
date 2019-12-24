import React from 'react';
import './App.css';
import MapContainer from './MapContainer';
import HeaderComponent from './HeaderComponent';


function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <MapContainer/>
    </div>
  );
}

export default App;