import React,{useState,useEffect} from 'react';
import {useNavigate,Link} from 'react-router-dom';

const url = "https://developerjwt.herokuapp.com/api/auth/userinfo";

function Profile(){
    let navigate = useNavigate();
    let [user,setUser] = useState()

    useEffect(() => {
        fetch(url,{
            method: 'GET',
            headers: {
                'x-access-token':localStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            setUser(data)
        })
    },[])

    const handleLogout = () => {
        localStorage.removeItem('ltk')
        localStorage.removeItem('rtk')
        navigate("/")
    }

    if(localStorage.getItem('ltk') === null){
        navigate("/")
    }else{
        localStorage.setItem('rtk', !user ? '': user.role)
    }

    const conditionalRender = () => {
        if(user){
            if(user.role === 'Admin'){
                return(
                    <Link className="btn btn-primary" to="/users">
                        Users
                    </Link>
                )
            }
        }
    }

    return(
       <div className="container">
           <div className="panel panel-primary">
               <div className="panel-heading">
                   <h3>Profile</h3>
               </div>
               <div className="panel-body">
                   <h1>Hi {!user ? 'loading...': `${user.name}`}</h1>
                   <h2>Your Email Id Is {!user ? 'loading...': `${user.email}`}</h2>
                   <h2>Your Phone Number is {!user ? 'loading...': `${user.phone}`}</h2>
                   <h2>Your role Is {!user ? 'loading...': `${user.role}`}</h2>
                   {conditionalRender()} &nbsp;
                   <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                </div>
           </div>
        </div>
    )
}

export default Profile;