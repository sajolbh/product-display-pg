import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';



const ColorSelect = () =>{

    const handleClick = (e) =>{
        e.preventDefault();
    }
    
    return (
        <div className = 'text-right'>          
            <button value="silver" style = {{height:'30px', width: '30px', backgroundColor: 'silver', 'marginRight': '33%'}}
            onClick = {handleClick}>
            </button>
        </div>
    );
}

export default ColorSelect;