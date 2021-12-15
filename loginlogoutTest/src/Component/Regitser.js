import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom'

const RegisterUrl = "https://developerjwt.herokuapp.com/api/auth/register"

function Register(){
    let navigate = useNavigate();
    let [name, setName] = useState()
    let [phone, setPhone] = useState()
    let [email, setEmail] = useState()
    let [password, setPassword] = useState()

    const handleChangeName = (event) => {
        setName(event.target.value)
    }

    const handleChangePhone = (event) => {
        setPhone(event.target.value)
    }
    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }


    const handleSubmit = () => {
        var myObj = {
            name,
            phone,
            email,
            password
        }
        fetch(RegisterUrl,{
            method:'POST',
            headers:{
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify(myObj)
        })
        .then(navigate("/"))
    }

    return(
        <div className="container">
            <br/>
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3>
                        Register
                    </h3>
                </div>
                <div className ="panel-body">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="col-md-6">
                                    <label>Name</label>
                                    <input className="form-control" name="name" value={name}
                                    onChange={handleChangeName}/>
                                </div>
                                <div className="col-md-6">
                                    <label>Phone</label>
                                    <input className="form-control" name="phone" value={phone}
                                    onChange={handleChangePhone}/>
                                </div>
                                <div className="col-md-6">
                                    <label>Email Id</label>
                                    <input className="form-control" name="email" value={email}
                                    onChange={handleChangeEmail}/>
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
                                <button className="btn btn-success" onClick={handleSubmit}>
                                    Register
                                </button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Register;