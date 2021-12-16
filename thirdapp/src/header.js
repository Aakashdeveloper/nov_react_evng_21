import React,{Component} from 'react';
import './Header.css';
import {Link,withRouter} from 'react-router-dom'

const url = "https://developerjwt.herokuapp.com/api/auth/userinfo"
class Header extends Component {
    constructor(props){
        super(props)

        this.state = {
            userdata:''
        }
    }

    handleLogout = () => {
        this.setState({userdata:''})
        sessionStorage.removeItem('ltk')
        sessionStorage.removeItem('userdata')
        this.props.history.push('/')
    }

    conditionalRender = () => {
        if(this.state.userdata.name){
            let data = this.state.userdata;
            let outputArray = [data.name,data.email,data.phone,data.role]
            sessionStorage.setItem('userdata',outputArray);
            return(
                <>
                    <Link class="btn btn-primary"><span className="glyphicon glyphicon-user"></span> Hi {outputArray[0]}</Link>
                    &nbsp;
                    <button className="btn btn-danger" 
                    onClick={this.handleLogout}>Logout</button>
                    </>
            )
        }else{
            return(
                <>
                    <Link class="btn btn-primary" to="/register"><span className="glyphicon glyphicon-user"></span> Sign Up</Link>
                    &nbsp;
                    <Link class="btn btn-success" to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link>
                </>
            )
        }
    }

    render(){
        return(
            <div className="header">
                <div id="brand">
                    Developer Funnel
                </div>
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div id="social">
                   {this.conditionalRender()}
                </div>
            </div>
        )
    }

    componentDidMount() {
        fetch(url,{
            method: 'GET',
            headers: {
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({userdata:data})
        })
    }
    
}

export default withRouter(Header)

