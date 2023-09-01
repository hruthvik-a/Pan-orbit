import React, { useState } from "react";
import MainProfile from "./MainProfile";
import "./index.css";
import OtherComponents from "./OtherComponents";
import Header from "./Header";

const navLinks = ["Profile", "Posts", "Gallery", "ToDo"];

function Index(props) {
  const [activeLink, setActiveLink] = useState(0);

  const handleClick = (index) => {
    setActiveLink(index);
  };

  return (
    <div>
      <div className="main-container">
        <div className="sidenav">
          <div style={{ marginTop: "25vh" }}>
            <div className="nav-link">
              {navLinks.map((item, index) => {
                return (
                  <>
                    <div
                      key={index}
                      className={index === activeLink ? "active" : ""}
                      onClick={() => handleClick(index)}
                    >
                      <p style={{ padding: "10px 10px 0px 20px" }}>{item}</p>
                      <div className="notch-container">
                        <div
                          className={
                            index === activeLink ? "opposite-notch1" : ""
                          }
                        >
                          {index === activeLink && (
                            <div style={{ width: "05px", height: "05px" }}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20px"
                                height="20px"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M10 7L15 12L10 17"
                                  stroke="#000000"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <hr style={{ width: "80%" }}></hr>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <div className="content-container">
          <Header activeLink={activeLink} />
          <hr></hr>
          {activeLink === 0 ? <MainProfile /> : <OtherComponents />}
        </div>
      </div>
    </div>
  );
}

export default Index;
