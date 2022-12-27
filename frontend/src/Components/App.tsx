import React from 'react';
import '../styles.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './Navbar';
import Register from './Register';
import Home from './Home';
import Landing from './Landing';
function App() {
    // @ts-ignore
    return (
        <div>
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route element={<Landing/>}/>
                    <Route element={<Home user={""}/>} path="/" />
                    <Route element={<Register />} path="/login"/>
                </Routes>

            </BrowserRouter>
        </div>
  );
}

export default App;