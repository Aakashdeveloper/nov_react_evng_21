import React,{Component} from 'react';
import axios from 'axios';
import OrderDisplay from './orderDisplay'

const url ="http://localhost:6910/orders"

class ViewOrder extends Component{
    constructor(){
        super()

        this.state={
            orders:''
        }
    }
    render(){
        return(
           <OrderDisplay bookdata={this.state.orders}/>
        )
    }

    //
    componentDidMount(){
        axios.get(url).then((res) => {this.setState({orders:res.data})})
    }
}

export default ViewOrder;