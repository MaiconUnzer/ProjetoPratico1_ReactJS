import React from "react";
import uuid from "uuid";

import TurmasList from "../components/TurmasList";
import NewTurma from "../components/NewTurma";
import TurmaService from "../services/TurmaService";
import AlunoService from "../services/AlunoService";
import Aluno from "../components/Aluno";

class AulasTeoricas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      turmas: [],
      creatingTurma: false,
      turma: { id: 0, name: "", alunos: [] }
    };
    this.saveTurma = this.saveTurma.bind(this);
    this.deleteTurma = this.deleteTurma.bind(this);
    this.handleCreateTurma = this.handleCreateTurma.bind(this);
  }

  componentDidMount() {
    this.setState(() => {
      const turmas = TurmaService.getTurmas();
      return { turmas };
    });
  }

  addAlunoNaTurma({ name, id }) {
    // const turmas = prevState.turmas.slice();
    // if (id) {
    //   const index = turmas.findIndex(aula => aula.id === id);
    //   turmas[index].alunos.push({ name, id });
    // }
    // this.setState(() => {
    //   return { turmas };
    // });
  }

  handleCreateTurma() {
    this.setState(prevState => {
      return { creatingTurma: !prevState.creatingTurma };
    });
  }

  saveTurma({ name, id }) {
    this.setState(prevState => {
      const turmas = prevState.turmas.slice(); //Cria um Novo Array com todos os alunos que existem no array 'alunosList'
      if (name != "") {
        if (id) {
          const index = turmas.findIndex(aluno => aluno.id === id);
          turmas[index].name = name;
        } else {
          const turma = {
            name: name,
            id: uuid()
          };
          turmas.push(turma);
        }

        TurmaService.saveTurmas(turmas);
      }

      return {
        turmas
      };
    });
  }

  deleteTurma(id) {
    this.setState(prevState => {
      const turmas = prevState.turmas.slice(); //Cria um Novo Array com todos os alunos que existem no array 'alunosList'
      if (id) {
        const index = turmas.findIndex(turma => turma.id === id);
        turmas.splice(index, 1);
        TurmaService.saveTurmas(turmas);

        let alunos = AlunoService.getAlunos();
        alunos.forEach(aluno => {
          if (aluno.turmaId === id) {
            aluno.turmaId = undefined;
          }
        });
        AlunoService.saveAlunos(alunos);
      }
      return {
        turmas
      };
    });
  }

  render() {
    const { turmas, creatingTurma } = this.state;
    return (
      <React.Fragment>
        <NewTurma
          handleCreateTurma={this.handleCreateTurma}
          saveTurma={this.saveTurma}
          creatingTurma={creatingTurma}
        />
        <TurmasList
          turmasList={turmas}
          saveTurma={this.saveTurma}
          deleteTurma={this.deleteTurma}
        />
      </React.Fragment>
    );
  }
}

export default AulasTeoricas;
