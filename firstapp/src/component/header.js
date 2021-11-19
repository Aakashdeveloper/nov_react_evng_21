import React,{Fragment,Component} from 'react';
import './header.css'

class Header extends Component {

    constructor(props){
        super(props)

        this.state={
            title:'My React App',
            keywords:'User Input here'
        }
    }

    handleChange = (event) =>{
        console.log(event.target.value);
        this.setState({keywords:event.target.value})
    }

    render(){
        console.log("in render")
        return(
            <Fragment>
                <header>
                    <div className="logo">{this.state.title}</div>
                    <center>
                        <input onChange={this.handleChange}/>
                        <div style={{color:'white',fontSize:'16px'}}>{this.state.keywords}</div>
                    </center>
                </header>
                <hr/>
            </Fragment>
        )
    }
}


export default Header;