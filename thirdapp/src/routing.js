import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Home from './component/home/Home';
import NotFound from './NotFound';
import ListingApi from './component/listing/listingApi';
import RestDetails from './component/details/restDetails';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/list/:mealId" component={ListingApi}/>
                <Route exact path="/details/:restId" component={RestDetails}/>
                <Route component={NotFound}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing