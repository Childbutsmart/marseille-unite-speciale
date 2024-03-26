import { useEffect, useState } from "react";
import { Marker, Popup } from "react-leaflet";
import markerIconUrl from "../../../assets/icons/wanted_6027094.png";
import markerIconUrlFemale from "../../../assets/icons/wanted_female_10062916.png";
import L from "leaflet";
import Notice from '../Details/Notice.json';


const Details = () => {
  const [cardsInfos, setCardsInfos] = useState([]);

  const markerIcon = new L.Icon({
    iconUrl: markerIconUrl,
    iconSize: [23, 23],
    iconAnchor: [10, 10],
    popupAnchor: [0, -20],
  });

  const markerIconFemale = new L.Icon ({
    iconUrl: markerIconUrlFemale,
    iconSize: [23, 23],
    iconAnchor: [17, 20],
    popupAnchor: [0, -20],
  });

    console.log(cardsInfos)
  
  const fetchData = async () => {
    try {
      const resp = Notice
      setCardsInfos(resp)
    } catch (error) {
      console.error("Une erreur s'est produite lors de la récupération des données :", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(cardsInfos);

  return (
    <>
      {cardsInfos.map((cardInfo) => (
        cardInfo && cardInfo.coordinates && (
        <Marker
          key={cardInfo.entity_id}
          position={[cardInfo.coordinates.latitude, cardInfo.coordinates.longitude]}
          icon={cardInfo.sex_id === "F" ? markerIconFemale : markerIcon}
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
