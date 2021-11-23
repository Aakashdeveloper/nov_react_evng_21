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
    /*
    var a = [4,5,3,6,1,8,9,0,3]
    a.filter((data) => { return data>5})
    */
    filterProduct = (keyword) => {
        var output = this.state.products.filter((data) => {
            return data.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1
        })
        this.setState({filtered:output})
    }
    render(){
        // console.log(this.state.products)
        return(
            <React.Fragment>
                <Header userText={(data) => {this.filterProduct(data)}}/>
                <ProductDisplay prodData={this.state.filtered}/>
                <Footer year="2022" month="Nov"/>
            </React.Fragment>
        )
    }
}

export default Home;