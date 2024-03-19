import { useEffect, useState } from "react";
import axios from "axios";

const Details = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://ws-public.interpol.int/notices/v1/red%22"
      );
      console.log(response.data);
    } catch (err) {
      console.log("Do not fetch ressource :", err);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log("data", data);

  return (
    <>
      <section>
        <p>Test Récupération API</p>
      </section>
    </>
  );
};

export default Details;
