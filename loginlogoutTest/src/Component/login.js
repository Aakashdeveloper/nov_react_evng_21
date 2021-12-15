import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';

const LoginUrl = "https://developerjwt.herokuapp.com/api/auth/login"

function Login(){
    let navigate = useNavigate();
    let [email, setEmail] = useState()
    let [password, setPassword] = useState()
    let [message, setMessage] = useState()

    const handleChangeName = (event) => {
        setEmail(event.target.value)
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = () => {
        var myObj = {
            email,
            password
        }
        fetch(LoginUrl,{
            method:'POST',
            headers:{
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify(myObj)
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.auth == false){
                setMessage(data.token)
            }else{
                localStorage.setItem('ltk', data.token)
                navigate("/profile")
            }
        })
    }
    return(
        <div className="container">
            <br/>
            <div className="panel panel-success">
                <div className="panel-heading">
                    <h3>
                        Login App
                    </h3>
                </div>
                <div className ="panel-body">
                        <div className="row">
                            <div className="col-md-12">
                                <h3 style={{color:'red'}}>{message}</h3>
                                <div className="col-md-6">
                                    <label>Email Id</label>
                                    <input className="form-control" name="email" value={email}
                                    onChange={handleChangeName}/>
                                </div>
                                <div className="col-md-6">
                                    <label>Password</label>
                                    <input className="form-control" name="password" value={password}
                                    onChange={handleChangePassword}/>
                                </div> 
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-md-12">
                                <button className="btn btn-info" onClick={handleSubmit}>
                                    Login
                                </button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Login;