import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

const NavigationBar = ({ isMenuOpen, openCloseMenu }) => {
  return (
    <div
      className={classNames("navigation-bar", {
        "navigation-bar--open": isMenuOpen
      })}
    >
      <button className="button-close" onClick={openCloseMenu}>
        <i className="material-icons">close</i>
      </button>
      <div className="navigation-bar-menu">
        <Link className="menu-item" to="/" onClick={openCloseMenu}>
          InÍcio
        </Link>
        <Link className="menu-item" to="/AulasTeoricas" onClick={openCloseMenu}>
          Aula Teórica
        </Link>
        <Link className="menu-item" to="/Alunos" onClick={openCloseMenu}>
          Alunos
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
