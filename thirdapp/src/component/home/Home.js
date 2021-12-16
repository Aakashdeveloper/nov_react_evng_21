import React from 'react';
import Search from './Search';
import QuickSearch from './QuickSearch';
import Header from '../../header';

const Home = (props) => {
    console.log(">>>in home",props)
    return(
        <>
           <Header/> 
            <Search/>
            <QuickSearch/>
        </>
    )
}

export default Home;