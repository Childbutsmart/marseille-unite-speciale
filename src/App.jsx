import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import WorldMap from './components/Map/WorldMap/WorldMap';
import Report_compo from './components/Report_compo/Report_compo.jsx'
import List from './components/list/List.jsx';
import Navbar from './components/NavBar/NavBar.jsx';
import Home from './components/Home/Home.jsx'
import Footer from './components/Footer/Footer.jsx'


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
                <Footer />
            </>
        </Router>
    );
}

export default App;