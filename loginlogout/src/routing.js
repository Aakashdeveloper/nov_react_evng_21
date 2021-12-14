import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Login from './Component/login';
import Register from './Component/Regitser';
import Profile from './Component/Profile';
import Users from './Component/UserApi';

const Routing = () => {
    return(
        <div className="container">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Login />}/>
                    <Route path="/register" element={<Register />}/>
                    <Route path="/profile" element={<Profile />}/>
                    <Route path="/users" element={<Users />}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>
    )
}

export default Routing;
