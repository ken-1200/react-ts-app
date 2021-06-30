import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Task from './components/organisms/Task';
import NewTask from './components/organisms/NewTask';
import ShowTask from './components/organisms/ShowTask';

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Task }></Route>
          <Route exact path="/task" component={ Task }></Route>
          <Route path="/task/new" component={ NewTask }></Route>
          <Route path="/task/:id" component={ ShowTask }></Route>
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
