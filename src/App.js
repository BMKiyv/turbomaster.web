import React,{Suspense} from 'react';
import{Routes,Route} from 'react-router-dom';
import Home from './components/Home/index';
import PreLoader from './components/Loader/PreLoader/index';
import './scss/App.scss';
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();
let path = customHistory
function App() {
  return ( 
    <Suspense fallback = {<PreLoader/>}>
      <Routes history = {customHistory}> 
      {console.log(path)}
        <Route  path = '/' element = {<Home path = {path}/>} />  
      </Routes>
    </Suspense>
  );
}

export default App;
