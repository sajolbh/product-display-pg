import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ColorSelect from '.././ColorSelect/ColorSelect.js';

const Buy = (props)=>{
    return (
        <div style = {{marginTop: '20%', marginLeft: '40%'}}>
            { (props.discount>0) && <del> {props.price+props.discount} </del> }
            ${props.price}
            <br/>
            <div class = "btn btn-lg btn-primary"> Buy Now 
            
            </div>
        </div> 
    );
}

export default Buy;