import React from 'react';
import { Route, Link } from 'react-router-dom';
import Login from './auth/login';
import Goals from './goals';
import Create from './tasks/create';
import List from './tasks/list';

const App = () => (
  <div>
    <main>
      <Route exact path="/" component={Login} />
      <Route exact path="/goals" component={Goals} />
      <Route exact path="/create" component={Create} />
      <Route exact path="/list" component={List} />
    </main>
  </div>
)

export default App
