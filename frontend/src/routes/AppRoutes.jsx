import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AuthContainer from '../pages/AuthContainer';
import ContactPage from '../components/ContactPage';


const AppRoutes = () => {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/auth" element={<AuthContainer />} />
                <Route path="/ContactUs" element={<ContactPage />} />
            </Routes>
        </Router>
    </div>
  )
}

export default AppRoutes