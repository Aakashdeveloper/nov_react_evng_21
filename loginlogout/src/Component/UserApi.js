import React,{useState,useEffect} from 'react';
import axios from 'axios';
import UserDisplay from './UserDisplay';

const url = "https://developerjwt.herokuapp.com/api/auth/users";

function UserApi(){
    let [users,setUsers] = useState()

    useEffect(() => {
        axios.get(url).then((res) => {setUsers(res.data)})
    })
    
    return(
        <UserDisplay userdata={users}/>
    )

}

export default UserApi;