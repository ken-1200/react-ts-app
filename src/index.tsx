import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Task from './components/organisms/Task';
import NewTask from './components/organisms/NewTask';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Task }></Route>
        <Route exact path="/task" component={ Task }></Route>
        <Route path="/task/new" component={ NewTask }></Route>
        {/* <Route path="/task/:id" component={ ShowTask }></Route> */}
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
