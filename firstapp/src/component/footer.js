import React from 'react';

const Footer = (props) => {
    console.log("in footer",props)
    return(
        <div style={{display:'inline-block',width:'100%'}}>
            <hr/>
            <center>
                <h3>&copy; Developers Funnel {props.year} {props.month}</h3>
            </center>
        </div>
    )
}

export default Footer