import { useState } from 'react';
import Cards from "../components/Cards";

const Index = () => {
  const [ nasaData, setNasaData ] = useState([]);

  const getNasaData = async () => {
    const res = await fetch("https://images-api.nasa.gov/search?q=colombia");
    const data = await res.json();
    setNasaData(data.collection.items);
  };

  return (
    <div>
      <h1>Nasa Images</h1>
      <button onClick={getNasaData}>Get Nasa Data</button>
      <Cards nasaData={nasaData} />
    </div>
  );
};

export default Index;
