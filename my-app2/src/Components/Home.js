import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { useData } from "./Contexts/DataContext";

function Home(props) {
  const navigate = useNavigate();
  const apiData = useData();

  const handleOnclick = (id) => {
    const filtered = apiData.filter((item) => item.id === parseInt(id));
    sessionStorage.setItem("user", JSON.stringify(filtered[0]));
    navigate(`/Profile/${id}`);
  };

  return (
    <div className="home-home">
      <div className="home--parent-content">
        {apiData.map((item) => {
          return (
            <div key={item.id}>
              <div
                className="home-parent"
                onClick={() => handleOnclick(item.id)}
              >
                <span className="image-container">
                  <img
                    className="home-image"
                    src={item.profilepicture}
                    alt={`${item.name} profile pic`}
                  />
                </span>
                <span>{item.name}</span>
              </div>
              <hr style={{ width: "80%" }}></hr>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
