import React,{Suspense} from 'react';
import{Routes,Route} from 'react-router-dom';
import Home from './components/Home/index';
import PreLoader from './components/Loader/PreLoader/index';
import './scss/App.scss';

function App() {
  return ( 
    <Suspense fallback = {<PreLoader/>}>
      <Routes> 
        <Route  path = '/' element = {<Home/>} />  
      </Routes>
    </Suspense>
  );
}

export default App;
