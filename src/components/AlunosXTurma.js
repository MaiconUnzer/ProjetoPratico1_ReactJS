import React from "react";

import TurmaService from "../services/TurmaService";
import AlunoService from "../services/AlunoService";

class AlunosXTurma extends React.Component {
  constructor(props) {
    super(props);
    this.state = { turma: {}, alunos: [] };
    this.loadAlunos = this.loadAlunos.bind(this);
  }

  componentWillMount() {
    this.setState(() => {
      const { match } = this.props;
      const turma = TurmaService.getTurma(match.params.id);
      return {
        turma
      };
    });
    this.loadAlunos();
  }

  loadAlunos() {
    this.setState(prevState => {
      let alunos = AlunoService.getAlunos();
      alunos = alunos.filter(
        aluno =>
          aluno.turmaId === undefined || aluno.turmaId === prevState.turma.id
      );

      return {
        alunos
      };
    });
  }

  render() {
    const { turma, alunos } = this.state;
    return (
      <React.Fragment>
        <div className="main-option-title">{turma.name}</div>
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group">
              {alunos.map(aluno => {
                return (
                  <li className="list-group-item" key={aluno.id}>
                    <span>{aluno.name}</span>
                    <span>
                      {aluno.turmaId === turma.id ? (
                        <React.Fragment>
                          <span>
                            <i className="material-icons">check</i>
                          </span>
                          <button
                            onClick={() => {
                              AlunoService.removeAluno(turma.id, aluno.id);
                              this.loadAlunos();
                            }}
                          >
                            Excluir Aluno
                          </button>
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          <span>
                            <i className="material-icons">close</i>
                          </span>

                          <button
                            className="btn-add-primary"
                            onClick={() => {
                              AlunoService.addAluno(turma.id, aluno.id);
                              this.loadAlunos();
                            }}
                          >
                            Incluir Aluno
                          </button>
                        </React.Fragment>
                      )}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AlunosXTurma;
