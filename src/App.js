import React from 'react';
import InputBox from './components/guess/input';
import { Route, Switch,withRouter } from 'react-router-dom';

import './App.scss';
const App = () => (
  <div className="App-header">
    <Switch>
      <Route exact path='/' component={InputBox} />
    </Switch>
  </div>
);



export default withRouter(App);
