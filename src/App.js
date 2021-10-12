import { Route } from 'react-router-dom';
import Main from "./container/Main/Main";
import MobileMain from "./container/MobileMain/MobileMain"

import React, { Component } from "react";

import styles from "./App.module.css"

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
          <div className={styles.desktop}>
            <Route path="/" exact render= {() => <Main select="work"/>} />
            <Route path="/about" exact render= {() => <Main select="about"/>} />
            <Route path="/advertising" exact render= {() => <Main select="advertising"/>} />
            <Route path="/fiction" exact render= {() => <Main select="fiction"/>} />
            <Route path="/video" exact render= {() => <Main select="video"/>} />
            <Route path="/contact" exact render= {() => <Main select="contact"/>} />
          </div>

          <div className={styles.mobile}>
            <Route path="/" exact render= {() => <MobileMain select="work"/>} />
            <Route path="/about" exact render= {() => <MobileMain select="about"/>} />
            <Route path="/advertising" exact render= {() => <MobileMain select="advertising"/>} />
            <Route path="/fiction" exact render= {() => <MobileMain select="fiction"/>} />
            <Route path="/video" exact render= {() => <MobileMain select="video"/>} />
            <Route path="/contact" exact render= {() => <MobileMain select="contact"/>} />
          </div>
      </div>
    );
  }
}

export default App;
