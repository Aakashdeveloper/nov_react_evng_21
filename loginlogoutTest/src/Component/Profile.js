import React,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom'

const url = "https://developerjwt.herokuapp.com/api/auth/userinfo";

function Profile(){
    let navigate = useNavigate();
    let [user,setUser] = useState()

    console.log(">>>>outside>>",localStorage.getItem('ltk'))
    useEffect(() => {
        fetch(url,{
            method: 'GET',
            headers: { 
                'x-access-token':localStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(">>>>>",data)
            setUser(data)
        })
    },[])
    
    const conditionalRender = () => {
        if(user){
            if(user.role == 'Admin'){
                return(
                    <Link className="btn btn-primary" to="/users">
                        Users
                    </Link>
                )
            }
        }
    }

    
    const handleLogout = () => {
        localStorage.removeItem('ltk');
        localStorage.removeItem('rtk');
        navigate("/")
    }

    
    if(localStorage.getItem('ltk') === null){
        navigate("/")
    }else{
        localStorage.setItem('rtk', !user?'':user.role)
    }

    console.log(">>>>",user)

    return(
        <div className="container">
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3>Profile</h3>
                </div>
                <div className="panel-body">
                    <h1>Hi {!user ? 'Loading...' : `${user.name}`}</h1>
                    <h2>Your Email id is {!user ? 'Loading...' : `${user.email}`}</h2>
                    <h2>Your Phone is {!user ? 'Loading...' : `${user.phone}`}</h2>
                    <h2>Your Role is {!user ? 'Loading...' : `${user.role}`}</h2>
                    {conditionalRender()} &nbsp;
                    <button  class="btn btn-danger" onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Profile

 //{conditionalRender()} &nbsp;