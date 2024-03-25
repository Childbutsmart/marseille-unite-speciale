import { useEffect, useState } from "react";
import { Marker, Popup } from "react-leaflet";
import axios from "axios";
import markerIconUrl from "../../../assets/icons/wanted_female_10062916.png";
import L from "leaflet";
import opencage from "opencage-api-client";

const Details = () => {
  const [cardsInfos, setCardsInfos] = useState([]);
  const markerIcon = new L.Icon({
    iconUrl: markerIconUrl,
    iconSize: [30, 30],
    iconAnchor: [17, 20],
    popupAnchor: [0, -20],
  });

  // Fonction fetchData pour récupérer les données de l'API
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

  // Utilisation de useEffect pour appeler fetchData une fois que le composant est monté
  useEffect(() => {
    fetchData();
  }, []);

  // State pour stocker les objets avec les coordonnées ajoutées
  const [objects] = useState([]);

  // Fonction de géocodage d'une adresse
  const geocodeAddress = async (cityName, index) => {
    try {
      const apiKey = "5b312780ef1346a9ae5cf6097a1341bf";
      console.log("adresse:", cityName);

      if (cityName) {
        const { results } = await opencage.geocode({
          q: cityName,
          key: apiKey,
        });
        const result = results[index];
        console.log("reponse api:", result);

        // Récupération des coordonnées et mise à jour des objets
        const coordinates = {
          latitude: result.geometry.lat,
          longitude: result.geometry.lng,
        };

        objects = [...cardsInfos];
        objects[index] = { ...objects[index], coordinates };
        setCardsInfos(objects);
        console.log(objects);

      } else {
        console.error("Lieu de naissance non défini pour l'objet", index);
      }
      
    } catch (error) {
      console.error("Error while geocoding address: ", error);
    }
  };

  // Utilisation de useEffect pour géocoder les adresses manquantes dans les cardsInfos
  useEffect(() => {
    cardsInfos.forEach((cardInfo, index) => {
      if (cardInfo && cardInfo.place_of_birth && !cardInfo.coordinates) {
        geocodeAddress(cardInfo.place_of_birth, index);
      }
    });
  }, [cardsInfos]);

  console.log("COORDONNEES", cardsInfos.coordinates);
  // Retourne les marqueurs avec les popups pour les objets ayant des coordonnées
  return (
    <>
      {cardsInfos.map(
        (cardInfo) =>
          cardInfo &&
          cardInfo.coordinates && (
            <Marker
              key={cardInfo.entity_id}
              position={[
                cardInfo.coordinates.latitude,
                cardInfo.coordinates.longitude,
              ]}
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
      )}
    </>
  );
};

export default Details;
