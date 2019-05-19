import React from "react";
import uuid from "uuid";

import AlunosList from "../components/AlunosList";
import NewAluno from "../components/NewAluno";
import AlunoService from "../services/AlunoService";
import { isNullOrUndefined } from "util";

class Alunos extends React.Component {
  constructor(props) {
    super(props);
    this.state = { alunosList: [] };
    this.saveAluno = this.saveAluno.bind(this);
    this.deleteAluno = this.deleteAluno.bind(this);
  }

  componentDidMount() {
    this.setState(() => {
      const alunosList = AlunoService.getAlunos();
      return { alunosList };
    });
  }

  saveAluno({ name, id }) {
    this.setState(prevState => {
      const alunosList = prevState.alunosList.slice(); //Cria um Novo Array com todos os alunos que existem no array 'alunosList'
      if (name != "") {
        if (id) {
          const index = alunosList.findIndex(aluno => aluno.id === id);
          alunosList[index].name = name;
        } else {
          const alunoLocal = {
            name: name,
            id: uuid()
          };
          alunosList.push(alunoLocal);
        }
        AlunoService.saveAlunos(alunosList);
      }

      return {
        alunosList
      };
    });
  }

  deleteAluno(id) {
    this.setState(prevState => {
      const alunosList = prevState.alunosList.slice(); //Cria um Novo Array com todos os alunos que existem no array 'alunosList'

      if (id) {
        const index = alunosList.findIndex(aluno => aluno.id === id);
        alunosList.splice(index, 1);
        AlunoService.saveAlunos(alunosList);
      }

      return {
        alunosList
      };
    });
  }

  render() {
    const { alunosList } = this.state;

    return (
      <React.Fragment>
        <NewAluno saveAluno={this.saveAluno} />
        <AlunosList
          alunosList={alunosList}
          saveAluno={this.saveAluno}
          deleteAluno={this.deleteAluno}
        />
      </React.Fragment>
    );
  }
}

export default Alunos;
