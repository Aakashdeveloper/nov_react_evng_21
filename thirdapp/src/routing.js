import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Home from './component/home/Home';
import NotFound from './NotFound';
import ListingApi from './component/listing/listingApi';
import RestDetails from './component/details/restDetails';
import PlaceOrder from './component/booking/placeBooking';
import ViewOrder from './component/booking/viewOrderApi';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/list/:mealId" component={ListingApi}/>
                <Route exact path="/details/:restId" component={RestDetails}/>
                <Route exact path="/placeOrder/:restName" component={PlaceOrder}/>
                <Route exact path="/viewOrder" component={ViewOrder}/>
                <Route component={NotFound}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing