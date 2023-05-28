import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  const changeGreen = () => {
    document.body.style.backgroundColor = "#35C649";
    props.showAlert("Background color changed to Green", "success")
  }
  const changeYellow = () => {
    document.body.style.backgroundColor = "#c9c41e";
    props.showAlert("Background color changed to Yellow", "warning")
  }
  const changeRed = () => {
    document.body.style.backgroundColor = "#eb3131";
    props.showAlert("Background color changed to Red", "danger")
  }
  const changeSky = () => {
    document.body.style.backgroundColor = "#1ec9be";
    props.showAlert("Background color changed to Sky", "info")
  }
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.aboutText}
              </a>
            </li>
          </ul>
          {/* <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-primary" type="submit">Search</button>
          </form> */}
            <button className="btn btn-success mx-1" onClick={changeGreen}>Green</button>
            <button className="btn btn-warning mx-1" onClick={changeYellow}>Yellow</button>
            <button className="btn btn-danger mx-1" onClick={changeRed}>Red</button>
            <button className="btn btn-info mx-1" onClick={changeSky}>Sky</button>
          
          <div className={`form-check form-switch text-${props.mode==="light" ? "dark" : "light"}`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              {`${props.mode==="light" ? "Enable DarkMode" : "Disable DarkMode"}`}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About",
};
