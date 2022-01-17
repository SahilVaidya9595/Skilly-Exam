import React from 'react';
import './App.css'
import {Routes, Route } from "react-router-dom"

import Navbar from './components/common components/Navbar';
import HomePage from './components/pages/Home_page';
// import PracticePage from './components/pages/Practice_page'
import AboutPage from './components/pages/About_page';
import ContactPage from './components/pages/Contact_page';
import StudenLogin from './components/login_registration/student_login_registration/student_login';
import StudentRegistration from './components/login_registration/student_login_registration/student_registration';
import CollegeLogin from './components/login_registration/college_login_registration/college_login';
import CollegeRegistration from './components/login_registration/college_login_registration/college_registration';
function App() {
  return (

    <>
        <Navbar/>
        
        <Routes>
        
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/practice" element={<PracticePage />} /> */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/studentlogin" element={<StudenLogin />} />
          <Route path="/studentregistration" element={<StudentRegistration />} />
          <Route path="/collegelogin" element={<CollegeLogin />} />
          <Route path="/collegeregistration" element={<CollegeRegistration />} />
        </Routes>

    </>
  )
}

export default App;