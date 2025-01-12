import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Home from './pages/home';
import About from './pages/About';
import Contact from './pages/Contact';
import Admin from './pages/admin';
import Users from './pages/users';
import Dashboard from './pages/dashboard';
// import Sideroute from './pages/sideroute';



const App = () => {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Header />
                <div className="flex flex-grow">
                <Sidebar />
                    <main className="container flex-grow p-4 mx-auto">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/admin" element={<Admin />} />
                            <Route path="/users" element={<Users />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                            {/* <Route path='/sideroute' element={<Sideroute/>} */}
                        </Routes>
                    </main>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default App;