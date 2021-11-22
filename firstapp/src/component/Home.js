import React,{Component} from 'react';
import Header from './header';
import Footer from './footer'
import ProductDisplay from './ProductDisplay';
import JSON from './db.json';

class Home extends Component {
    constructor(){
        super()

        this.state={
            products:JSON,
            filtered:JSON
        }
    }
    filterProduct = (keyword) => {
        var output = ""
    }
    render(){
        // console.log(this.state.products)
        return(
            <React.Fragment>
                <Header userText={(data) => {console.log("data in home",data)}}/>
                <ProductDisplay prodData={this.state.filtered}/>
                <Footer year="2022" month="Nov"/>
            </React.Fragment>
        )
    }
}

export default Home;