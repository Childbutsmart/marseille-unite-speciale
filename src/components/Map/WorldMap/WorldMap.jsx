import { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Maps from "../Maps/Maps";
import "leaflet/dist/leaflet.css";
import useGeoLocate from "../../Hooks_/useGeoLocate/useGeoLocate";
import Details from "../../API/Details/Details";
import ShowMyLocation from "../ShowMyLocation/ShowMyLocation";

const WorldMap = () => {
  const [center, setCenter] = useState({
    lat: 45.81510165369121,
    lng: 4.005403918589199,
  });
  const [buttonClicked, setButtonClicked] = useState(false);
  const zoomLevel = 3.4;
  const mapRef = useRef(null);
  const location = useGeoLocate();

  const handleButtonClick = () => {
    setButtonClicked(true);
  }

  return (
    <>
      <h1>World Map</h1>
      <div className="row">
        <div className="col text-center">
          <div className="col">
            <MapContainer center={center} zoom={zoomLevel} ref={mapRef}>
              <TileLayer
                url={Maps.maptiler.url}
                attribution={Maps.maptiler.attribution}
              />
              <Details />
              {location.loaded && !location.error && (
                <Marker
                  position={[
                    location.coordinates.lat,
                    location.coordinates.lng,
                  ]}
                >
                  <Popup>
                    <p>Vous êtes ici.</p>
                  </Popup>
                </Marker>
              )}
          <ShowMyLocation isButtonClicked={buttonClicked}/>
            </MapContainer>
          <div className="col">
            <button className="btn" onClick={handleButtonClick}>Me localiser</button>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorldMap;
