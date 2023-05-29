import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Login.css";

const Login = ({ onLogin, user }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === user?.email && password === user?.password) {
      setIsLoggedIn(true);
      onLogin(user);
      navigate("/profile");
    } else {
      setErrorMessage("Usuario o contraseña incorrectos");
    }
  };

  if (isLoggedIn) {
    return (
      <div className="login-container">
        <p>Inicio de sesión correcto.</p>
        <button onClick={() => navigate("/profile")}>Ir a Profile</button>
      </div>
    );
  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Contraseña:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
