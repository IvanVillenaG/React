import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import Villagers from "./components/pages/Villagers";
import RandomVillagers from "./components/pages/RandomVillagers";
import Login from "./components/pages/Login";
import Profile from "./components/pages/Profile";
import Register from "./components/pages/Register";
import "./styles/App.css";

const App = () => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleRegister = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  const handleLogin = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <NavBar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route
          path="/villagers"
          element={<Villagers isLoggedIn={isLoggedIn} user={user} />}
        />
        <Route
          path="/random-villagers"
          element={<RandomVillagers isLoggedIn={isLoggedIn} user={user} />}
        />
        <Route
          path="/login"
          element={<Login onLogin={handleLogin} user={user} />}
        />
        <Route
          path="/profile"
          element={
            <Profile
              isLoggedIn={isLoggedIn}
              user={user}
              onLogout={handleLogout}
            />
          }
        />
        <Route
          path="/register"
          element={
            <Register isRegistered={isLoggedIn} onRegister={handleRegister} />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
