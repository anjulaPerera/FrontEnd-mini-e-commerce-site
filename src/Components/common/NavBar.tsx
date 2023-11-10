import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "../vendors/styles/styles.css";

const NavBar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid justify-content-end align-items-center d-flex ">
        <div className="nav-content py-3 pr-2 mr-50">
          <div className="nav-items justify-content-around align-items-center d-flex">
            <div className="menu mr-4">
              <p className="mb-0 mr-4 fw-800">
                ADMIN <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
              </p>
            </div>
            <div className="profile d-flex">
              <div className="profile-image bg-blue">
                <div className="online"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
