import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/RandomVillager.css";

const RandomVillagers = ({ isLoggedIn }) => {
  const [villager, setVillager] = useState(null);

  useEffect(() => {
    if (isLoggedIn) {
      fetchRandomVillager();
    }
  }, [isLoggedIn]);

  const fetchRandomVillager = async () => {
    try {
      const response = await axios.get("https://acnhapi.com/v1/villagers/");
      const data = response.data;
      const villagersArray = Object.values(data);
      const randomIndex = Math.floor(Math.random() * villagersArray.length);
      const randomVillager = villagersArray[randomIndex];

      setVillager(randomVillager);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNewVillager = () => {
    fetchRandomVillager();
  };

  return (
    <div className="randomvillager-title">
      <h1>Random Villager</h1>
      {isLoggedIn ? (
        <div className="random-villagers-container">
          {villager && (
            <div className="villager-card">
              <p>{villager.name["name-USen"]}</p>
              <img
                src={villager.image_uri}
                alt={villager.name["name-USen"]}
                className="villager-image"
              />
              <p>Personality: {villager.personality}</p>
              <p>Birthday: {villager["birthday-string"]}</p>
              <p>Species: {villager.species}</p>
              <p>Catch Phrase: {villager["catch-phrase"]}</p>
            </div>
          )}
          <div className="randomvillager-button">
            <button onClick={handleNewVillager}>New Villager</button>
          </div>
        </div>
      ) : (
        <p>Por favor inicie sesión para ver la página.</p>
      )}
    </div>
  );
};

export default RandomVillagers;
