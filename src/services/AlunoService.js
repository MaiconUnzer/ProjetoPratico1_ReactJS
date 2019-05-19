import { isNullOrUndefined } from "util";

class AlunoService {
  static getAlunos() {
    const alunos = window.localStorage.getItem("alunos");
    return alunos ? JSON.parse(alunos) : [];
  }

  static saveAlunos(alunos) {
    window.localStorage.setItem("alunos", JSON.stringify(alunos));
  }

  static addAluno(idTurma, idAluno) {
    let alunos = AlunoService.getAlunos();
    const alunoIndex = alunos.findIndex(aluno => aluno.id === idAluno);
    let aluno = alunos[alunoIndex];

    if (isNullOrUndefined(aluno.turmaId)) {
      aluno.turmaId = idTurma;
      alunos[alunoIndex] = aluno;
      AlunoService.saveAlunos(alunos);
    }
  }

  static removeAluno(idTurma, idAluno) {
    let alunos = AlunoService.getAlunos();
    const alunoIndex = alunos.findIndex(aluno => aluno.id === idAluno);
    let aluno = alunos[alunoIndex];

    if (aluno.turmaId === idTurma) {
      aluno.turmaId = undefined;
      alunos[alunoIndex] = aluno;
      AlunoService.saveAlunos(alunos);
    }
  }

  static getAlunosByTurma(idTurma) {
    let alunos = AlunoService.getAlunos();
    alunos = alunos.filter(aluno => aluno.turmaId === idTurma);

    return alunos;
  }
}

export default AlunoService;
