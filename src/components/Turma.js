import React from "react";
import { Link } from "react-router-dom";

import AlunoService from "../services/AlunoService";

class Turma extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false, turmaName: "" };
    this.handleEditTurma = this.handleEditTurma.bind(this);
    this.saveEdition = this.saveEdition.bind(this);
  }

  handleEditTurma() {
    this.setState(prevState => {
      return {
        isEditing: !prevState.isEditing
      };
    });
  }

  saveEdition() {
    this.setState(() => {
      return {
        isEditing: false
      };
    });
  }

  render() {
    const { turma, saveTurma, deleteTurma } = this.props;
    const { isEditing, turmaName } = this.state;

    return (
      <React.Fragment>
        <li className="list-group-item">
          <div className="row">
            <div className="col-md-12">
              {isEditing ? (
                <React.Fragment>
                  <input
                    className="form-control"
                    type="text"
                    defaultValue={turma.name}
                    onChange={event => {
                      this.setState({
                        turmaName: event.target.value
                      });
                    }}
                  />
                  <button onClick={this.handleEditTurma}>
                    <i className="material-icons">cancel</i>
                  </button>
                  <button
                    onClick={() => {
                      saveTurma({ name: turmaName, id: turma.id });
                      this.setState({
                        turmaName: ""
                      });
                      this.handleEditTurma();
                    }}
                  >
                    <i className="material-icons">save</i>
                  </button>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <span>{turma.name}</span>
                  <button onClick={this.handleEditTurma}>
                    <i className="material-icons">edit</i>
                  </button>
                </React.Fragment>
              )}

              <button
                onClick={() => {
                  deleteTurma(turma.id);
                }}
              >
                <i className="material-icons">delete</i>
              </button>
              <Link to={"/AlunosXTurma/" + turma.id} className="float-right">
                Alunos
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {AlunoService.getAlunosByTurma(turma.id).length > 0 ? (
                <span>
                  {AlunoService.getAlunosByTurma(turma.id).length} Alunos
                </span>
              ) : (
                <span>Nenhum Aluno</span>
              )}
            </div>
          </div>
        </li>
      </React.Fragment>
    );
  }
}

export default Turma;
