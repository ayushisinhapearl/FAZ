import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AuthContainer from '../pages/AuthContainer';
import ContactPage from '../components/ContactPage';
import Home from '../pages/Home';


const AppRoutes = () => {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/auth" element={<AuthContainer />} />
                <Route path="/ContactUs" element={<ContactPage />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    </div>
  )
}

export default AppRoutes