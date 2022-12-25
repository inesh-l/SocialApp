import React from 'react';
import '../styles.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Navbar from './Navbar';
import Register from './Register';

function App() {
    return (
        <div>
            <Navbar />
            <Register />
        </div>
  );
}

export default App;