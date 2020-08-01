import React from 'react';
import InputBox from './components/guess/input';
import { Route, Switch } from 'react-router-dom';
import {End} from './endpage/end';
import './App.scss';
const App = () => (
  <div className="App">
    <Switch>
    <Route exact path='/' component={InputBox} />
    <Route exact path='/thankyou' component={End} />
    </Switch>
  </div>
);



export default App;
