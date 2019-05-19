import React from "react";

import Aluno from "./Aluno";

const AlunosList = function({ alunosList, saveAluno, deleteAluno }) {
  return (
    <div className="row">
      <ul className="list-group">
        {alunosList.map(function(aluno) {
          return (
            <Aluno
              aluno={aluno}
              deleteAluno={deleteAluno}
              key={aluno.id}
              saveAluno={saveAluno}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default AlunosList;
