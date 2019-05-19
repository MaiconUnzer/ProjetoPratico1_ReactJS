import React from "react";

class Aluno extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false, alunoName: "" };
    this.handleEditAluno = this.handleEditAluno.bind(this);
    this.saveEdition = this.saveEdition.bind(this);
  }

  handleEditAluno() {
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
    const { aluno, saveAluno, deleteAluno } = this.props;
    const { isEditing, alunoName } = this.state;

    return (
      <React.Fragment>
        <li className="list-group-item">
          {isEditing ? (
            <React.Fragment>
              <input
                className="form-control"
                type="text"
                defaultValue={aluno.name}
                onChange={event => {
                  this.setState({
                    alunoName: event.target.value
                  });
                }}
              />
              <button
                onClick={() => {
                  saveAluno({ name: alunoName, id: aluno.id });
                  this.setState({
                    alunoName: ""
                  });
                  this.handleEditAluno();
                }}
              >
                <i className="material-icons">save</i>
              </button>
              <button onClick={this.handleEditAluno}>
                <i className="material-icons">cancel</i>
              </button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <span>{aluno.name}</span>
              <button onClick={this.handleEditAluno}>
                <i className="material-icons">edit</i>
              </button>
            </React.Fragment>
          )}
          <button
            onClick={() => {
              deleteAluno(aluno.id);
            }}
          >
            <i className="material-icons">delete</i>
          </button>
        </li>
      </React.Fragment>
    );
  }
}

export default Aluno;
