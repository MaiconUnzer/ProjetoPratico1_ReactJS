import React from "react";

import Turma from "./Turma";

const TurmasList = function({ turmasList, saveTurma, deleteTurma }) {
  return (
    <div className="row">
      <div className="col-md-12">
        <ul className="list-group">
          {turmasList.map(function(turma) {
            return (
              <Turma
                turma={turma}
                deleteTurma={deleteTurma}
                key={turma.id}
                saveTurma={saveTurma}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TurmasList;
