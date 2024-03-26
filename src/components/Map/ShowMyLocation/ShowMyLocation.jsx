import { useState } from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet';

const ShowMyLocation = ({ isButtonClicked }) => {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
      if (isButtonClicked) {
        map.locate();
      },

    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>Vous êtes ici</Popup>
    </Marker>
  );
};

export default ShowMyLocation;