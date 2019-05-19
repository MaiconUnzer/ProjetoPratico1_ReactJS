import React from "react";

class NewTurma extends React.Component {
  constructor(props) {
    super(props);
    this.state = { turmaName: "" };
    this.save = this.save.bind(this);
    this.clearState = this.clearState.bind(this);
  }

  save() {
    this.props.saveTurma({ name: this.state.turmaName });
    this.clearState();
    this.props.handleCreateTurma();
  }

  clearState() {
    this.setState({
      turmaName: ""
    });
  }

  render() {
    const { handleCreateTurma, creatingTurma } = this.props;
    const { turmaName } = this.state;
    return (
      <React.Fragment>
        <div className="row">
          <div className="main-option-title">Aula Teórica</div>
          <div className="form-add-ico">
            <button onClick={handleCreateTurma} disabled={creatingTurma}>
              <i className="material-icons">add_circle</i>
            </button>
          </div>
        </div>
        {creatingTurma && (
          <div className="row pt-4">
            <div className="col-md-12 form-add-options">
              <input
                className="form-control"
                type="text"
                value={turmaName}
                placeholder="Noma da Turma"
                onChange={event => {
                  this.setState({
                    turmaName: event.target.value
                  });
                }}
              />
              <button
                onClick={() => {
                  handleCreateTurma();
                  this.clearState();
                }}
              >
                <i className="material-icons">cancel</i>
              </button>
              <button onClick={this.save}>
                <i className="material-icons">save</i>
              </button>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default NewTurma;
