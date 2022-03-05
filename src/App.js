import { Route } from 'react-router-dom';
import Main from "./container/Main/Main";
import MobileMain from "./container/MobileMain/MobileMain"
import 'bootstrap/dist/css/bootstrap.min.css';

import logoAvalanche from "./assets/Images/logo.png"

import React, { Component } from "react";

import styles from "./App.module.css"

// PERSONNEL
class App extends Component {
  state = {
    clicked: false
  }

  render() {

    var finalShow = null;
    if (this.state.clicked === false) {
      finalShow = (
        <div className={styles.App}>
          <img style={{ cursor: "pointer" }} className={styles.Logo} src={logoAvalanche} alt={"Avalanche"} onClick={() => this.setState({ clicked: true })} />
        </div>
      )

    } else {
      finalShow = (
        <div className={styles.App}>
          <h1> Avalanche </h1>
          <div className={styles.desktop}>
            <Route path="/" exact render={() => <Main select="work" />} />
            <Route path="/about" exact render={() => <Main select="about" />} />
            <Route path="/advertising" exact render={() => <Main select="advertising" />} />
            <Route path="/fiction" exact render={() => <Main select="fiction" />} />
            <Route path="/video" exact render={() => <Main select="video" />} />
          </div>

          <div className={styles.mobile}>
            <Route path="/" exact render={() => <MobileMain select="work" />} />
            <Route path="/about" exact render={() => <MobileMain select="about" />} />
            <Route path="/advertising" exact render={() => <MobileMain select="advertising" />} />
            <Route path="/fiction" exact render={() => <MobileMain select="fiction" />} />
            <Route path="/video" exact render={() => <MobileMain select="video" />} />
          </div>
        </div>
      )
    }

    return (
      <div>
        {finalShow}
      </div>
    )
}
}

export default App;
