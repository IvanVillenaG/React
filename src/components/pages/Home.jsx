import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Home.css";

const Home = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  const handleListadoCompleto = () => {
    navigate("/villagers");
  };

  const handleAleatoriamente = () => {
    navigate("/random-villagers");
  };

  if (isLoggedIn) {
    return (
      <div className="home-container">
        <img
          src="https://www.animal-crossing.com/new-horizons/assets/img/global/logos/logo-acnh-en.png"
          alt="Bienvenido al Universo de Animal Crossing: New Horizons"
        />
        <p>¿Cómo quieres descubrir a sus habitantes?</p>
        <button onClick={handleListadoCompleto}>Listado completo</button>
        <button onClick={handleAleatoriamente}>Aleatoriamente</button>
      </div>
    );
  } else {
    const handleRegisterClick = () => {
      navigate("/register");
    };

    return (
      <div className="home-container">
        <h1>Animal Crossing: New Horizons</h1>
        <p>Por favor regístrese para comenzar</p>
        <button onClick={handleRegisterClick}>Registrarse</button>
      </div>
    );
  }
};

export default Home;
