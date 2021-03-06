import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Courses from './components/Courses';

function App() {
  return (
  <React.Fragment>
    <Routes>
      <Route path='/' element={ < Layout /> } >
        <Route index element={ < Home /> } />
        <Route path='/about' element={ < About /> } />
        <Route path='/skills' element={ < Skills /> } />
        <Route path='/contact' element={ < Contact /> } />
        <Route path='/coursework' element={ < Courses /> } />
      </Route>
    </Routes>
  </React.Fragment>
  );
}

export default App;
