import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./header.css";
import API from './../../utils/axios';

export default function Header() {
  const auth = useSelector((state) => state.auth);
  const [click, setClick] = useState(false);
  console.log(auth);
  const { isLogged, isCustomer, isReviewer } = auth;
  const handleLogout = async () => {
    try {
      await API.get("/api/user/logout");
      localStorage.removeItem("firstLogin");
      window.location.href = "/";
    } catch (err) {}
  };
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <Link exact to="/" className="nav-logo" activeClassName="active">
            Communication Bridge
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {isCustomer && (
              <>
                <li className="nav-item">
                  <Link
                    exact
                    to=""
                    activeClassName="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    exact
                    to="/problem"
                    activeClassName="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                  >
                    Problems
                  </Link>
                </li>
              </>
            )}
            {isReviewer && (
              <>
                <li className="nav-item">
                  <Link
                    exact
                    to=""
                    activeClassName="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    exact
                    to="/review"
                    activeClassName="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                  >
                    Reviews
                  </Link>
                </li>
              </>
            )}
            {isLogged ? (
              <>
                <li className="nav-item">
                  <Link
                    esxact
                    to="/profile"
                    activeClassName="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                  >
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    exacts
                    to="/team"
                    activeClassName="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                  >
                    Team
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    exact
                    to="/contact"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleLogout}
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    exact
                    to=""
                    activeClassName="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    exact
                    to="/login"
                    activeClassName="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    exacts
                    to="/register"
                    activeClassName="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                  >
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    exacts
                    to="/team"
                    activeClassName="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                  >
                    Team
                  </Link>
                </li>
              </>
            )}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
}
