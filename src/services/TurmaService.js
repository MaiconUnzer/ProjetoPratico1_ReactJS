import AlunoService from "./AlunoService";

class TurmaService {
  static getTurmas() {
    const turmas = window.localStorage.getItem("turmas");
    return turmas ? JSON.parse(turmas) : [];
  }

  static saveTurmas(turmas) {
    window.localStorage.setItem("turmas", JSON.stringify(turmas));
  }

  static getTurma(id) {
    const turmas = TurmaService.getTurmas();
    const turmaIndex = turmas.findIndex(turma => turma.id === id);

    return turmas[turmaIndex];
  }
}

export default TurmaService;
