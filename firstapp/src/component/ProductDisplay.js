import React from 'react';
import './product.css';

const ProductDisplay = (props) => {
    console.log("in prod",props)
    const renderProduct = props.prodData.map((data,index) => {
        return(
            <div key={data.id} className="card">
                <img src={data.image} alt={data.name}/>
                <hr/>
                <div>
                    <h3>{data.name}</h3>
                    <h3>Rs.{data.cost}</h3>
                </div>
            </div>
        )
    })

    return(
        <>
           <div className="main">
               {renderProduct}
           </div>
        </>
    )
}

export default ProductDisplay;