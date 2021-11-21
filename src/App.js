import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Classes from './classes';
import Hooks from './hooks';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Route exact path={'/'}>
            <Link className={'App-link'} to={'/classes'}>
              <h2>To the classes!</h2>
            </Link>
            <Link className={'App-link'} to={'/hooks'}>
              <h2>To the hooks!</h2>
            </Link>
          </Route>
          <Route path={'/classes'}>
            <Classes />
          </Route>
          <Route path={'/hooks'}>
            <Hooks />
          </Route>
        </BrowserRouter>
      </header>

    </div>
  );
}

export default App;
