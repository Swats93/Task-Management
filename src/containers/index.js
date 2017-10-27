import React from 'react';
import { Route, Link } from 'react-router-dom';
import Login from './auth/login';
import Goals from './goals';

const App = () => (
  <div>
    <main>
      <Route exact path="/" component={Login} />
      <Route exact path="/goals" component={Goals} />
    </main>
  </div>
)

export default App
