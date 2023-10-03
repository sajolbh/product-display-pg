import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Description = (props) =>{
    return (
        <div>
            <p class="blockquote" style = {{'fontSize': '15px',
                'fontFamily': 'Segoe UI,SegoeUI,"Helvetica Neue",Helvetica,Arial,sans-serif'}}> {props.description}</p>
        </div>
    );
}

export default Description;