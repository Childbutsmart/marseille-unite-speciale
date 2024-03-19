import { useEffect, useState } from "react";
import axios from "axios";

const DetailsOfWanted = () => {
  const [people, setPeople] = useState([]);
  const [peopleImg, setPeopleImg] = useState([]);
  const [peopleSelf, setPeopleSelf] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://ws-public.interpol.int/notices/v1/red"
      );
      setPeople(response.data._embedded.notices);
      console.log("first", response.data._embedded.notices);
    } catch (err) {
      console.log("Do not fetch ressource :", err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  console.log(people);
  return (
    <>
      <section>
        {people?.map((element) => (
        <img key={element.entity_id} alt="test" src={element._links?.images?.href?._embedded?.images?.links?.self?.href} />
        ))}
        </section>
    </>
  );
};

export default DetailsOfWanted;
