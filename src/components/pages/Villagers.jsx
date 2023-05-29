import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/Villagers.css";

const Villagers = ({ isLoggedIn }) => {
  const [villagers, setVillagers] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(9);

  useEffect(() => {
    if (isLoggedIn) {
      fetchVillagers();
    }
  }, [isLoggedIn]);

  const fetchVillagers = async () => {
    try {
      const response = await axios.get("https://acnhapi.com/v1/villagers/");
      const data = response.data;
      const villagersArray = Object.values(data);

      setVillagers(villagersArray);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNext = () => {
    setStartIndex(startIndex + 10);
    setEndIndex(endIndex + 10);
  };

  const handlePrevious = () => {
    setStartIndex(startIndex - 10);
    setEndIndex(endIndex - 10);
  };

  const renderVillagers = () => {
    const displayedVillagers = villagers.slice(startIndex, endIndex + 1);

    return displayedVillagers.map((villager) => (
      <div key={villager.id} className="villager-card">
        <div className="villager-card-content">
          <p>{villager.name["name-USen"]}</p>
          <img
            src={villager.image_uri}
            alt={villager.name["name-USen"]}
            className="villager-image"
          />
        </div>
      </div>
    ));
  };

  return (
    <div className="villagers-title">
      <h1>Villagers</h1>
      {isLoggedIn ? (
        <div className="villagers-container">{renderVillagers()}</div>
      ) : (
        <h4>Por favor inicie sesión para ver la página.</h4>
      )}

      {isLoggedIn && (
        <div className="villager-buttons-container">
          {startIndex > 0 && <button onClick={handlePrevious}>Anterior</button>}
          {endIndex < villagers.length - 1 && (
            <button onClick={handleNext}>Siguiente</button>
          )}
        </div>
      )}
    </div>
  );
};

export default Villagers;
