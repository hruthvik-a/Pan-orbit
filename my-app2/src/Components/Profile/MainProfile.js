import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./mainprofile.css";
import mapsImage from "../assets/maps.png";

function MainProfile() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    // const filtered = apiData.filter((item) => item.id === parseInt(id));
    let filtered = JSON.parse(sessionStorage.getItem("user"));
    setUser(filtered);
    return () => {
      setUser({});
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div>
      <div className="profile-container">
        <div className="profile-1">
          <div className="name-image-profile">
            <img
              className="profile-image"
              src={user?.profilepicture}
              alt={`${user?.name} profile pic`}
            />
            <p>{user?.name}</p>
          </div>
          <div class="user-info">
            <p>
              <span class="label">Username:</span>
              <span class="value">{user?.username}</span>
            </p>
            <p>
              <span class="label">e-mail:</span>
              <span class="value">{user?.email}</span>
            </p>
            <p>
              <span class="label">Phone:</span>
              <span class="value">{user?.phone}</span>
            </p>
            <p>
              <span class="label">Website:</span>
              <span class="value">{user?.website}</span>
            </p>
          </div>
          <hr style={{ width: "75%", marginTop: "15px" }}></hr>
          <div className="profile-company">
            <p
              style={{
                color: "#9A9A9A",
                fontWeight: "400",
                marginBottom: "10px",
              }}
            >
              Company
            </p>
            <p>
              <span class="label">Name:</span>
              <span class="value">{user?.company?.name}</span>
            </p>
            <p>
              <span class="label">Catchphrase:</span>
              <span class="value">{user?.company?.catchPhrase}</span>
            </p>
            <p>
              <span class="label">bs:</span>
              <span class="value">{user?.company?.bs}</span>
            </p>
          </div>
        </div>
        <div className="vertical-line"></div>
        <div className="profile-2">
          <p className="heading">
            <span>Address:</span>
          </p>
          <div style={{ marginLeft: "30px" }}>
            <p>
              <span className="label">Street :</span>
              <span className="value">{user?.address?.street}</span>
            </p>
            <p>
              <span className="label">Suite :</span>
              <span className="value">{user?.address?.suite}</span>
            </p>
            <p>
              <span className="label">Suite :</span>
              <span className="value">{user?.address?.city}</span>
            </p>
            <p>
              <span className="label">Zipcode :</span>
              <span className="value">{user?.address?.zipcode}</span>
            </p>
          </div>

          <div className="map-container">
            <img
              src={mapsImage}
              alt="mapimage"
              style={{ width: "550px", height: "250px", padding: "20px" }}
            />
            <div className="map">
              <p>
                <span className="label">Lat:</span>
                <span className="value">{user?.address?.geo?.lat}</span>
              </p>
              <p>
                <span className="label">Lng:</span>
                <span className="value">{user?.address?.geo?.lng}</span>
              </p>
            </div>
          </div>
          <div>
            <div className="chatbox-container">
              <div className="svg-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20px"
                  height="20px"
                  viewBox="0 0 50 50"
                >
                  <path d="M 25 4.0625 C 12.414063 4.0625 2.0625 12.925781 2.0625 24 C 2.0625 30.425781 5.625 36.09375 11 39.71875 C 10.992188 39.933594 11 40.265625 10.71875 41.3125 C 10.371094 42.605469 9.683594 44.4375 8.25 46.46875 L 7.21875 47.90625 L 9 47.9375 C 15.175781 47.964844 18.753906 43.90625 19.3125 43.25 C 21.136719 43.65625 23.035156 43.9375 25 43.9375 C 37.582031 43.9375 47.9375 35.074219 47.9375 24 C 47.9375 12.925781 37.582031 4.0625 25 4.0625 Z M 25 5.9375 C 36.714844 5.9375 46.0625 14.089844 46.0625 24 C 46.0625 33.910156 36.714844 42.0625 25 42.0625 C 22.996094 42.0625 21.050781 41.820313 19.21875 41.375 L 18.65625 41.25 L 18.28125 41.71875 C 18.28125 41.71875 15.390625 44.976563 10.78125 45.75 C 11.613281 44.257813 12.246094 42.871094 12.53125 41.8125 C 12.929688 40.332031 12.9375 39.3125 12.9375 39.3125 L 12.9375 38.8125 L 12.5 38.53125 C 7.273438 35.21875 3.9375 29.941406 3.9375 24 C 3.9375 14.089844 13.28125 5.9375 25 5.9375 Z"></path>
                </svg>
              </div>
              <p>Chats</p>
              <svg
                className="arrow-svg"
                fill="#000000"
                height="10px"
                width="10px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 487 487"
              >
                <path
                  d="M397.7,376.1c20.4,20.4,53.6,20.4,74,0s20.4-53.6,0-74L280.5,110.9c-20.4-20.4-53.6-20.4-74,0L15.3,302.1
		c-20.4,20.4-20.4,53.6,0,74s53.6,20.4,74,0l154.2-154.2L397.7,376.1z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainProfile;
