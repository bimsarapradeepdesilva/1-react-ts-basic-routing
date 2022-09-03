import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

// components
import HomeComponent from '../Pages/HomeComponent';
import AboutComponent from '../Pages/AboutComponent';
import ContactusComponent from '../Pages/ContactusComponent';
import NavbarComponent from '../components/NavbarComponent';
import ErrorComponent from '../Pages/ErrorComponent';

const RouteComponent = () => {
  return (
    <div>
        <BrowserRouter>
        <NavbarComponent />
            <Routes>
                <Route path="/home" element={<HomeComponent />} />
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/about" element={<AboutComponent />} />
                <Route path="/contact-us" element={<ContactusComponent />} />
                <Route path="*" element={<ErrorComponent />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default RouteComponent