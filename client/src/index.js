import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import NewRoute from './components/NewRoute/NewRoute.js';
import { Link, Route, Switch } from 'react-router-dom';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path = "/" component = {App} exact = {true} />
    <Route path = "/:id" component = {NewRoute} />
  </Switch>
    </BrowserRouter>
      ,
  document.getElementById('root')
);
