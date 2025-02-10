import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import env from './env.json'

import './App.css'

const isMaintenanceMode = import.meta.env.VITE_MAINTENANCE_MODE === 'true';

function App() {

  return (
    <Router>
      <>
        <header>{env.type}</header>
        <Routes>
          <Route path="/" element={isMaintenanceMode ? <Maintenance /> : <Home />} />
        </Routes>
      </>
    </Router>
  );
}

function Home() {
  return <h1>Hello, World!</h1>;
}

function Maintenance() {
  return <h1>Sorry, we're currently under scheduled maintenance.</h1>;
}

export default App;
