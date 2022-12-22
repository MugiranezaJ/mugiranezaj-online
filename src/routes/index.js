import React from 'react'
import { Routes, Route} from 'react-router-dom'
import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';
import Portfolio from '../components/Portfolio';
import Resume from '../components/Resume';
// import Dashboard from '../components/views/Dashboard';


export default function AppRoutes({authenticated, setAuthenticated}){
 
    return (
        <Routes>
            <Route 
                exact
                path='/about-me'
                element={<AboutMe/>} />
            <Route
                exact
                path='/portfolio'
                element={<Portfolio/>}/>
            <Route
                exact
                path='/resume'
                element={<Resume/>} />
            <Route
                exact
                path='/contact'
                element={
                    <Contact/>} /> 
            {/* <Route path='*' exact={true} element={<AboutMe/>} /> */}
        </Routes>
    )
    
}