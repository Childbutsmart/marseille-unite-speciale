import { useState, useEffect } from "react";
import opencage from "opencage-api-client";

const AddCoordinates = ({ initialObjects, onUpdateObjects, placeOfBirth }) => {
  const [objects, setObjects] = useState([initialObjects]);

  const updateParent = () => {
    onUpdateObjects(objects);
  };

  const geocodeAddress = async (cityName, index) => {
    try {
      const apiKey = "5b312780ef1346a9ae5cf6097a1341bf";
      console.log("adresse:", cityName);

      if (cityName) {
        const { results } = await opencage.geocode({
          q: cityName,
          key: apiKey,
        });
        const result = results[0];
        console.log("reponse api:", result);

        const coordinates = {
          latitude: result.geometry.lat,
          longitude: result.geometry.lng,
        };

        console.log(coordinates);

        const updatedObjects = [...objects];
        updatedObjects[index] = { ...updatedObjects[index], ...coordinates };
        setObjects(updatedObjects);
        updateParent();
      } else {
        console.error("Lieu de naissance non défini pour l'objet", index);
      }
    } catch (error) {
      console.error("Error while geocoding address: ", error);
    }
  };

  useEffect(() => {
    placeOfBirth?.forEach((cityName, index) => {
      geocodeAddress(cityName, index);
    });

    if (onUpdateObjects) {
      onUpdateObjects([...objects]);
    }
  }, [objects]);

  return (
    <>
      {objects.map((obj) => (
        <span>
          Lieu de naissance : {obj.place_of_birth}{" "}
        </span>
      ))}
    </>
  );
};

export default AddCoordinates;
