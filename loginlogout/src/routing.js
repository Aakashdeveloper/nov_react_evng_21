import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Login from './Component/login';
import Register from './Component/Regitser';

const Routing = () => {
    return(
        <div className="container">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Login />}/>
                    <Route path="/register" element={<Register />}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>
    )
}

export default Routing;
