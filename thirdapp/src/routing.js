import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Home from './component/home/Home';
import NotFound from './NotFound';
import ListingApi from './component/listing/listingApi'

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/list" component={ListingApi}/>
                <Route component={NotFound}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing