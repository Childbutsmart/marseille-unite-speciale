import { useEffect, useState } from "react";
import axios from "axios";

const DetailsOfWanted = () => {
  const [cardsInfos, setCardsInfos] = useState([]);


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

  console.log(cardsInfos);
  
};

export default DetailsOfWanted;
