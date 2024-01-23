
import './App.css';
import React from 'react';
import { BrowserRouter,Routes, Route, Navigate } from 'react-router-dom';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Details from './component/Home/Home';


function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Header></Header>
        <Routes>

          <Route path='/' lelment={<Navigate to="home" replace/>}></Route>
          <Route path='/home' element={<Home/> }> </Route>
          <Route path='/Details' element={<Details/>}></Route>
          <Route path='/Details' element={<Details/>}> </Route>
          
        </Routes>      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
