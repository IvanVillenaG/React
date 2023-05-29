import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Profile.css";

const Profile = ({ isLoggedIn, user, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      {isLoggedIn ? (
        <>
          <p>Has iniciado sesión correctamente</p>
          <h2>Datos del usuario:</h2>
          <p>Nombre: {user && user.firstName}</p>
          <p>Apellido: {user && user.lastName}</p>
          <p>Email: {user && user.email}</p>
          <button onClick={handleLogout}>Cerrar Sesión</button>
          <button onClick={handleGoHome}>Volver a Inicio</button>
        </>
      ) : (
        <p>No has iniciado sesión</p>
      )}
    </div>
  );
};

export default Profile;
