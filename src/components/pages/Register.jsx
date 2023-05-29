import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Register.css";

const Register = ({ onRegister }) => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    onRegister(user);
    setIsRegistered(true);
  };

  if (isRegistered) {
    return (
      <div className="register-container">
        <p>Se ha registrado de forma correcta.</p>
        <button onClick={() => navigate("/login")}>Ir a Login</button>
      </div>
    );
  }

  return (
    <div className="register-container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </label>
        <br />
        <label>
          Apellido:
          <input type="text" value={lastName} onChange={handleLastNameChange} />
        </label>
        <br />
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
