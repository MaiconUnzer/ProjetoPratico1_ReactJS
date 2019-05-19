import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AppBar from "../components/AppBar";
import NavigationBar from "../components/NavigationBar";
import Main from "../components/Main";
import Alunos from "./Alunos";
import AulasTeoricas from "./AulasTeoricas";
import AlunosXTurma from "../components/AlunosXTurma";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isMenuOpen: false };
    this.handleMenuBtnClick = this.handleMenuBtnClick.bind(this);
  }

  handleMenuBtnClick() {
    this.setState(prevState => {
      return { isMenuOpen: !prevState.isMenuOpen };
    });
  }

  render() {
    const { isMenuOpen } = this.state;

    return (
      <Router>
        <React.Fragment>
          <AppBar openCloseMenu={this.handleMenuBtnClick} />

          <div className="main">
            <Route exact path="/" component={Main} />
            <Route path="/Alunos" component={Alunos} />
            <Route path="/AulasTeoricas" component={AulasTeoricas} />
            <Route path="/AlunosXTurma/:id" component={AlunosXTurma} />
          </div>

          <NavigationBar
            isMenuOpen={isMenuOpen}
            openCloseMenu={this.handleMenuBtnClick}
          />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
