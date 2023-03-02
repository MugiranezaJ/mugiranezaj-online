import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutMe from "../pages/AboutMe";
import Contact from "../pages/Contact";
import Portfolio from "../components/Portfolio";
import Resume from "../pages/Resume";
// import Dashboard from '../components/views/Dashboard';

export default function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<AboutMe />} />
      <Route exact path="/about-me" element={<AboutMe />} />
      <Route exact path="/portfolio" element={<Portfolio />} />
      <Route exact path="/resume" element={<Resume />} />
      <Route exact path="/contact" element={<Contact />} />
      {/* <Route path='*' exact={true} element={<AboutMe/>} /> */}
    </Routes>
  );
}
