import React from "react";

class NewAluno extends React.Component {
  constructor(props) {
    super(props);
    this.state = { alunoName: "" };
    this.save = this.save.bind(this);
  }

  save() {
    this.props.saveAluno({ name: this.state.alunoName });
    this.setState({
      alunoName: ""
    });
  }

  render() {
    const { alunoName } = this.state;

    return (
      <React.Fragment>
        <div className="row">
          <div className="main-option-title">Alunos</div>
          <input
            type="text"
            className="form-control"
            value={alunoName}
            onChange={event => {
              this.setState({
                alunoName: event.target.value
              });
            }}
          />
          <button className="btn-add-primary" onClick={this.save}>
            Incluir Aluno
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default NewAluno;
