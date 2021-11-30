import React,{Suspense} from 'react';
import{Outlet} from 'react-router-dom';
import Home from './layout/Home/index';
import PreLoader from './components/Loader/PreLoader/index';
import './scss/App.scss';

function App({path}) {
  return ( 
    <Suspense fallback = {<PreLoader/>}>   
        <Home path = {path}/>
        <Outlet />
    </Suspense>
  );
}

export default App;
