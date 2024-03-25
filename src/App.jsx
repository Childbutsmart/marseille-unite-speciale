import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import WorldMap from './components/Map/WorldMap/WorldMap';
import Report_compo from './components/Report_compo/Report_compo.jsx'
import List from './components/List/List.jsx';
import Navbar from './components/NavBar/NavBar.jsx';
import Home from './components/Home/Home.jsx'


function App() {


    return (
        <Router>
            <>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/report" element={<Report_compo />} />
                    <Route path="/list" element={<List />} />
                    <Route path="/map" element={<WorldMap />} />
                </Routes>
            </>
        </Router>
    );
}

export default App;