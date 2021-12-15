import React,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import UserDisplay from './UserDisplay';

const url = "https://developerjwt.herokuapp.com/api/auth/users";

function UserApi(){
    let navigate = useNavigate();
    let [users,setUsers] = useState()

    if(localStorage.getItem('ltk') === null){
        navigate("/")
    }
    if(localStorage.getItem('ltk') !== null && localStorage.getItem('rtk') !== 'Admin'){
        navigate("/profile")
    }

    useEffect(() => {
        axios.get(url).then((res) => {setUsers(res.data)})
    })


    
    return(
        <UserDisplay userdata={users}/>
    )

}

export default UserApi;