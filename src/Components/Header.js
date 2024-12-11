
import React, { useState } from "react";
import Img1 from "../Images/PSBHS Logo icon 1.png";
import "../Pages/Homepage.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

import { Collapse } from "react-bootstrap";

const Header = () => {
  const [open, setOpen] = useState(false); 

  return (
    <div>
      {/* Header */}
      <header className="d-flex justify-content-between align-items-center py-3">
        <div className="d-flex align-items-center w-100">
          {/* Logo */}
          <img
            src={Img1}
            alt="Logo"
            className="logo"
            style={{
              height: "80px",
              width: "100px",
            }}
          />
          <div className="logo-text " style={{ flex: 1 }}>
            {" "}
            {/* Flexbox text container */}
            <h3 className="text-primary mb-0 logo-title">
              Professional School of Behavioral Health Sciences
            </h3>
            <p className="text-primary mb-0 logo-subtext">
              Interdisciplinary Workshop, Professional Certificate,
              Certification, and Professional Diploma Programs in Physiology and
              Behavioral Science
            </p>
          </div>
        </div>

        {/* Navigation Links for Larger Screens */}
        <nav className="d-none d-md-flex gap-4 justify-content-center align-items-center">
          <a href="/#" className="text-dark text-decoration-none nav-item">
            Home
          </a>
          <a href="/#" className="text-dark text-decoration-none nav-item">
            Profile
          </a>
          <button
            className="btn btn-primary nav-item"
            style={{ width: "130px", height: "50px" }}
          >
            My Courses
          </button>
        </nav>

        {/* Toggle Button for Small Screens */}
        <button
          className="d-md-none toggle-button"
          onClick={() => setOpen(!open)} // Toggle the collapse state
        >
          {open ? (
            <FontAwesomeIcon icon={faTimes} /> // "X" icon for close
          ) : (
            <FontAwesomeIcon icon={faBars} /> // "Menu" icon for open
          )}
        </button>
      </header>

      {/* Collapsible Navigation for Small Screens */}
      <Collapse in={open}>
        <div className="d-md-none">
          <nav className="mt-3">
            <a href="/#" className="d-block text-primary text-decoration-none">
              Home
            </a>
            <a href="/#" className="d-block text-primary text-decoration-none">
              Profile
            </a>
            <button className="btn btn-primary w-100 mt-2">My Courses</button>
          </nav>
        </div>
      </Collapse>
    </div>
  )
}

export default Header