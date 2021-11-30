import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Thanks from './pages/Thanks/index'
import './scss/App.scss';

const customHistory = createBrowserHistory();
let path = customHistory

ReactDOM.render(
    <Router>
      <Routes history = {customHistory}> 
        <Route  path = '/' element = {<App path = {path}/>} >
        <Route path = 'thank-you-page.html' exact element ={<Thanks success path = {path} />}/>
        <Route path = 'error-page.html' exact element ={<Thanks path = {path} />}/>
        </Route>
      </Routes>
    </Router>,
  document.getElementById('root')
);

