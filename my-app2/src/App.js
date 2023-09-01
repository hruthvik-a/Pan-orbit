import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import axios from "axios";
import { DataContext } from "./Components/Contexts/DataContext";

function App() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios
      .get("https://panorbit.in/api/users.json")
      .then((res) => setApiData(res.data.users))
      .catch((err) => console.log(err));
  }, []);
  return (
    <BrowserRouter>
      <DataContext.Provider value={apiData}>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Profile/:id" element={<Profile />} />
          </Routes>
        </div>
      </DataContext.Provider>
    </BrowserRouter>
  );
}

export default App;
