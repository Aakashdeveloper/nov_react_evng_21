import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import UserDisplay from './UserDisplay';

const url = "https://developerjwt.herokuapp.com/api/auth/users";

function UserApi(){
    let [users,setUsers] = useState()
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(url).then((res) => {setUsers(res.data)})
    })
    
    if(localStorage.getItem('ltk') === null){
        navigate("/")
    }
    if(localStorage.getItem('ltk') !== null && localStorage.getItem('rtk') !== 'Admin'){
        navigate("/profile")
    }
    return(
        <UserDisplay userdata={users}/>
    )

}

export default UserApi;