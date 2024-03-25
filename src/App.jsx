import './App.css'
import WorldMap from './components/Map/WorldMap/WorldMap';
import Report_compo from './components/Report_compo'
import List from './components/List/List.jsx';
import Navbar from './components/NavBar/NavBar.jsx';


function App() {


    return (
        <>
        <Navbar/>
        <Report_compo/>
        <List/>
        <WorldMap />
        </>
    )

}

export default App;