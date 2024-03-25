import { useEffect, useState } from "react";
import { Marker, Popup } from "react-leaflet";
import axios from "axios";
import markerIconUrl from "../../../assets/icons/wanted_female_10062916.png";
import L from "leaflet";
import AddCoordinates from "../../Map/AddCoordinates/AddCoordinates";

const Details = () => {
  const [cardsInfos, setCardsInfos] = useState([]);
  const markerIcon = new L.Icon({
    iconUrl: markerIconUrl,
    iconSize: [30, 30],
    iconAnchor: [17, 20],
    popupAnchor: [0, -20],
  });

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://ws-public.interpol.int/notices/v1/red"
      );
      const resJSON = await response.data._embedded.notices;

      const infos = await Promise.all(
        resJSON.map(async (element) => {
          const resp = await axios.get(element._links.self.href);
          const finalResp = resp.data;
          return finalResp;
        })
      );
      setCardsInfos(infos);
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de la récupération des données :",
        error
      );
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUpdateObjects = (updatedObjects) => {
    setCardsInfos(updatedObjects);
  }

  return (
    <>
    <AddCoordinates initialObjects={cardsInfos} updateObjects={handleUpdateObjects}
    placeOfBirth={cardsInfos?.map((cardInfo) => cardInfo.place_of_birth)}
    />
      {cardsInfos.map((cardInfo) => (
        cardInfo && cardInfo.coordinates && (
        <Marker
          key={cardInfo.entity_id}
          position={[cardInfo.coordinates.latitude, cardInfo.coordinates.longitude]}
          icon={markerIcon}
        >
          <Popup>
            <p>
              {cardInfo.forename} {cardInfo.name}
            </p>
            <p>Lieu de naissance : {cardInfo.place_of_birth}</p>
            <p>Sexe : {cardInfo.sex_id}</p>
            <a href="#">Voir plus d'informations</a>
          </Popup>
        </Marker>
        )
      ))}
      
    </>
  );
};

export default Details;
