import './App.css';
import Department from './components/Department/Department';
import Login from './components/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Departmentdetails from './components/Department/Departmentdetails';
import Home from './components/Adminpanel/Home';
import React from 'react';
import Footer from './components/footer/Footer';
import Doctordetails from './components/Doctors/Doctordetails';
import Doctor from './components/Doctors/Doctor';



  function App() {  
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path={'/'}element={<Login method='post'/>}></Route>
        <Route path={'/Home'}element={<Home />}></Route>
        <Route path={'/viewdetails'}element={<Doctordetails method='get'/>}></Route>
        <Route path={'/sview'}element={<Departmentdetails method='get'/>}></Route> 
       <Route path='/s'element={<Department method='post'/>}/>
       <Route path='/c'element={<Doctor method='post'/>}/>
      </Routes>
     </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App; 
