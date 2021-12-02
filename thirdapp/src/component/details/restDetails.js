import React,{Component} from 'react';
import axios from 'axios';
import './details.css'


const url = "http://localhost:6700/details"

class Details extends Component {
    constructor(props){
        super(props)

        this.state={
            details:'',
            menuList:'',
            userItem:''
        }
    }

    render(){
        // let details = this.state.details
        let {details} = this.state
        return(
            <>
                <div className="main">
                    <div className="tileImage">
                        <div className="imageClass">
                            <img src={this.state.details.restaurant_thumb} alt=""/>
                        </div>
                    </div>
                    <div className="tileContent">
                        <div className="content">
                            <h1>{details.restaurant_name}</h1>
                            <span id="cfeedback">245 Customer Say {details.rating_text}</span>
                            <h4>Old Price: <strike>Rs 1500 / 2 Person</strike></h4>
                            <h4>Offer Price: Rs {details.cost}/ 2 Person</h4>
                            <h3>We Provide Best Service </h3>
                            <div>
                                <div className="icons">
                                    <img src="https://i.ibb.co/2FbpqtH/sentizied.jpg" alt="sentizied"/>
                                </div>
                                <div className="icons">
                                    <img src="https://i.ibb.co/s56LLF9/homedelivery.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    // call api with axios 
    async componentDidMount(){
        let restId = this.props.match.params.restId;
        let response = await axios.get(`${url}/${restId}`)
        this.setState({details:response.data[0]})
    }
}

export default Details