import React,{Component} from 'react';
import './Search.css';

const url = "https://zomatoajulypi.herokuapp.com/location"

class Search extends Component{
    constructor(){
        super()

        this.state={
            location:''
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return (
                    <option value={item.state_id} key={item.state_id}>{item.state}</option>
                )
            })
        }
    }
    render(){
        return(
            <div className="search">
                <div id="logo">
                    <span>D!</span>
                </div>
                <div id="heading">
                    Search Place Near To You
                </div>
                <div id="dropdown">
                    <select>
                        <option>----SELECT Location----</option>

                    </select>
                    <select id="restaurant">
                        <option>----SELECT Restaurant----</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default Search