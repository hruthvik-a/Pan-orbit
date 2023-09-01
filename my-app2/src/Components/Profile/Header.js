import React, { useEffect, useState, useRef } from "react";
import { useData } from "../Contexts/DataContext";
import { Link, useParams } from "react-router-dom";
import "./header.css";

function Header(props) {
  const tab = {
    1: "Profile",
    2: "Posts",
    3: "Gallery",
    4: "ToDo",
  };
  const apiData = useData();
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [nextUsers, setNextUsers] = useState([]);
  const dropdownRef = useRef(null); // Ref for the dropdown container

  useEffect(() => {
    // const filtered = apiData.filter((item) => item.id === parseInt(id));
    let filtered = JSON.parse(sessionStorage.getItem("user"));
    setUser(filtered);
    console.log(user);
    console.log(apiData);
    const min = 1;
    const max = apiData.length;
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    const arr = [
      apiData[randomNum],
      apiData[Math.floor(Math.random() * (max - min + 1)) + min],
    ];
    setNextUsers([...arr]);
    console.log(arr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    //this is to handle dropdown conditions
    const handleMouseDown = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        !e.target.classList.contains("header-profile")
      ) {
        setProfileDropdown(false);
      }
    };
    //creating event listener
    document.addEventListener("mousedown", handleMouseDown);

    //cleaning up the eventlistener
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);
  const handleProfileClick = (e) => {
    setProfileDropdown(!profileDropdown);
  };
  return (
    <div className="header-container">
      <h7 style={{ color: "#545454", fontWeight: "bold" }}>
        {tab[props.activeLink + 1]}
      </h7>
      <div className="header-profile-container">
        <div className="header-profile" onClick={handleProfileClick}>
          <img
            className="header-image"
            src={user?.profilepicture}
            alt={`${user?.name} profile pic`}
          />
          <p style={{ color: "#545454", fontWeight: "400" }}>{user?.name}</p>
        </div>
        {profileDropdown && (
          <div
            className="drop-down"
            style={{ left: `950px`, top: `100px` }}
            ref={dropdownRef} //attaching drop-down ref
          >
            <div className="drop-down-container">
              <img
                className="drop-down-profilepic"
                src={user?.profilepicture}
                alt="profilepic"
              />
              <p style={{ color: "#545454" }}>{user?.name}</p>
              <p style={{ color: "#ABABAB", fontWeight: "400" }}>
                {user?.email}
              </p>
              <hr style={{ width: "80%" }}></hr>
              <div className="other-profiles">
                <p>
                  <img
                    src={nextUsers[0]?.profilepicture}
                    alt="img"
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                    }}
                  />
                  <span>{nextUsers[0]?.name}</span>
                </p>
                <hr style={{ width: "80%" }}></hr>
                <p>
                  <img
                    src={nextUsers[1]?.profilepicture}
                    alt="img"
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                    }}
                  />
                  <span>{nextUsers[1]?.name}</span>
                </p>
              </div>
              <Link to="/">
                <button className="sign-out-button">Sign Out</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
