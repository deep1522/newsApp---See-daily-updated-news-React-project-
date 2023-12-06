import './App.css';

import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        
        <Routes>
            <Route path='/' element={<News pagesize={8} country="in" category="general"/>}/>
            <Route path='/business' element={<News pagesize={8} country="in" category="business"/>}/>
            <Route path='/entertainment' element={<News pagesize={8} country="in" category="entertainment"/>}/>
            <Route path='/health' element={<News pagesize={8} country="in" category="health"/>}/>
            <Route path='/science' element={<News pagesize={8} country="in" category="science"/>}/>
            <Route path='/sports' element={<News pagesize={8} country="in" category="sports"/>}/>
            <Route path='/technology' element={<News pagesize={8} country="in" category="technology"/>}/>

        </Routes>
        </BrowserRouter>
        
      </div>
    )
  }
}

