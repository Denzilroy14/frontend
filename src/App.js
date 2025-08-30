import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Registration from'./registration';
import Admin from './admin';
export default function App(){
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Registration/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
    </Router>
  );
}