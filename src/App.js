import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Carrier from './pages/Carrier';
import AboutUs from './pages/AboutUs';
import Events from './pages/Events';
import ContactUs from './pages/ContactUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/Login';





function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/carrier" element={<Carrier/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/login" element={<LoginForm/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
