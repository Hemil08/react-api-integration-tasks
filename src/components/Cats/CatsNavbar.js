import React from "react";
import '../../assets/styles/Cats.css'
import { Link } from "react-router-dom";

const CatsNavbar = () => {
  return (
    <nav>
      <div className="navbar-container">
        <Link className="navbar-link" to={"/cats"}>
          <h3 className="navbar-title">
            <span class="material-symbols-outlined cat-navbar-title-icon">
              pets
            </span>
            <div className="nav-title-text">Cats</div>
          </h3>
        </Link>

        <div className="navbar-right-part">
          <Link className="navbar-link" to={"/cats/favorites"}>
            <div className="navbar-links">
              <span class="material-symbols-outlined cat-navbar-icon">
                favorite
              </span>
              <div className="nav-option">Favorites</div>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default CatsNavbar;
