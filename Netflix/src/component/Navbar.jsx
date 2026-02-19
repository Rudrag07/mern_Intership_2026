import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link class="navbar-brand" to="#">
          NETFLIX
        </Link>

        <div id="Navbar">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/netflixhome">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/netflixshow">
                Movie
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="/kids">
                Kids
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="/teamdetail">
                IPL
              </Link>
            </li>

              <li class="nav-item">
              <Link class="nav-link" to="/profile">
                Profile
              </Link>
              </li>
              <li class="nav-item">
              <Link class="nav-link" to="/formhandling">
                Form
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formValidation">
                Form2
              </Link>
              </li>
              <li class="nav-item">
              <Link class="nav-link" to="/Api">
                API
              </Link>
              </li>
               <li class="nav-item">
              <Link class="nav-link" to="/Api1">
                API1
              </Link>
              </li>
              <li>
              <Link class="nav-link" to="/Omdb">
                OMDB
              </Link>
              </li>
               <li>
              <Link class="nav-link" to="/Moviedetail">
                MovieSearch
              </Link>
              </li>
              
               <li>
              <Link class="nav-link" to="/Series">
                Series
              </Link>
              </li>
         
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
