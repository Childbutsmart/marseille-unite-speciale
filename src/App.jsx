import './App.css'
import WorldMap from './components/Map/WorldMap/WorldMap';
import Report_compo from './components/Report_compo'
import List from './components/List/List.jsx';
import Navbar from './components/NavBar/NavBar.jsx';
import Home from './components/Home/Home.jsx'


function App() {


    return (
        <>
        <Navbar/>
        <Home/>
        <Report_compo/>
        <List/>
        <WorldMap />
        </>
    )

}

export default App;