import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <React.Fragment>
      <div className="main-option">
        <div className="main-option-title">Serviços</div>
        <Link className="menu-item" to="/AulasTeoricas">
          Aula Teórica
        </Link>
      </div>
      <div className="main-option">
        <div className="main-option-title">Cadastros</div>
        <Link className="menu-item" to="/Alunos">
          Alunos
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Main;
