import { useState } from "react";
import Cards from "../components/Cards";

const Index = () => {
  const [nasaData, setNasaData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSearch, setCurrentSearch] = useState("colombia");

  const getNasaData = async () => {
    const res = await fetch(
      `https://images-api.nasa.gov/search?q=${currentSearch}&page=${currentPage}`
    );
    const data = await res.json();
    console.log(data);
    setNasaData(data.collection.items);
  };

  const onChangeCurrentSearch = (e) => {
    setCurrentSearch(e.target.value);
  };

  const searchNasaData = () => {
    setCurrentPage(1);
    let search = document.getElementById("searchInput").value;
    setCurrentSearch(search);
    getNasaData();
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    getNasaData();
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
    getNasaData();
  };

  return (
    <div>
      <h1>Nasa Images</h1>
      <button onClick={getNasaData}>Get Nasa Data</button>
      <input
        id="searchInput"
        type="text"
        onChange={onChangeCurrentSearch}
        value={currentSearch}
      ></input>
      <button id="searchButton" onClick={searchNasaData}>
        search
      </button>
      <br></br>
      <br></br>
      <button onMouseUp={nextPage}>Next Page</button>
      <button onMouseUp={previousPage}>Previous Page</button>
      <br></br>
      <br></br>
      <Cards nasaData={nasaData} />
    </div>
  );
};

export default Index;
