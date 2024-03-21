import { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Maps from "../Maps/Maps";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIconUrl from "../../../assets/icons/wanted_female_10062916.png";
import useGeoLocate from "../../Hooks_/useGeoLocate/useGeoLocate";

const WorldMap = () => {
  const [center, setCenter] = useState({
    lat: 45.81510165369121,
    lng: 4.005403918589199,
  });
  const zoomLevel = 3.4;
  const mapRef = useRef();
  const location = useGeoLocate();

  //FIXME - Does not work yet, will be fixed soon
  // const showMyLocation = () => {
  //   if (location.loaded && !location.error) {
  //     mapRef.current.leafletElement.flyTo(
  //       [location.coordinates.lat, location.coordinates.lng],
  //       zoomLevel, 
  //       {animate: true}
  //       );
  //   } else {
  //     alert(location.error.message);
  //   }
  // };

  const markerIcon = new L.Icon({
    iconUrl: markerIconUrl,
    iconSize: [30, 30],
    iconAnchor: [17, 20],
    popupAnchor: [0, -20],
  });

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
              <Marker
                position={[45.81510165369121, 4.005403918589199]}
                icon={markerIcon}
              >
                <Popup>
                  <p>Lieu de naissance :</p>
                  <a href="#">Voir plus d'informations</a>
                </Popup>
              </Marker>

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
            </MapContainer>
          </div>
          <div className="col">
            <button className="btn">
              Me localiser
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorldMap;
