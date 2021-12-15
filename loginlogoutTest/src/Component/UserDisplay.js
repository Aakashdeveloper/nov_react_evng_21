import React from 'react';

const UserDisplay = (props) => {
    const renderTable = ({userdata}) => {
        if(userdata){
            return userdata.map((item) => {
                return(
                    <tr key={item._id}>
                        <th>{item.name}</th>
                        <th>{item.phone}</th>
                        <th>{item.email}</th>
                        <th>{item.role}</th>
                    </tr>
                )
            })
        }
    }

    return(
        <div className="container">
            <center><h3>Users List</h3></center>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTable(props)}
                </tbody>
            </table>
        </div>
    )
}

export default UserDisplay