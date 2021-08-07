import { Route } from 'react-router-dom';
import Main from "./container/Main/Main"

import styles from "./App.module.css"

function App() {
  return (
    <div className={styles.App}>
        <Route path="/" exact render= {() => <Main />} />
    </div>
  );
}

export default App;
