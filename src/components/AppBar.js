import React from "react";

const AppBar = ({ openCloseMenu }) => {
  return (
    <div className="app-bar">
      <button className="button-menu" onClick={openCloseMenu}>
        <i className="material-icons">menu</i>
      </button>
      <span className="title-bar">Auto Escola Senna</span>
    </div>
  );
};

export default AppBar;
