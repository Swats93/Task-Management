import React from 'react';
import { Route, Link } from 'react-router-dom';
import Login from './auth/login';
import Tasklist from './tasklist';
import Create from './tasks/create';
import List from './tasks/list';
import View from './tasks/view';

const App = () => (
  <div>
    <main>
      <Route exact path="/" component={Login} />
      <Route exact path="/tasklist" component={Tasklist} />
      <Route exact path="/create" component={Create} />
      <Route exact path="/list" component={List} />
      <Route exact path="/view" component={View} />
    </main>
  </div>
)

export default App
