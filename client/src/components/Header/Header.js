import React from 'react';
import './header.css';
import 'bootstrap/dist/css/bootstrap.css';

const Star = () =>{
  return (
    <span style={{fontSize: '2em', color: 'Tomato'}}>
    <i className="fa fa-star"></i>       
  </span>
  );
}

const EmptyStar = () =>{
  return (
    <span style={{fontSize: '2em', color:'silver'}}>
    <i class="fa fa-star"></i>
    </span>
  );
}

const Header = (props)=>{

    return(
        <div>
    {
        props.discount > 0 &&
      <span class="badge badge-info" style={{height:'30px', marginTop: '5px'}}> <h5>Save  ${props.discount}</h5></span>
    }
      <br/>
      <p class="text-monospace  font-weight-bold" style = {{'font-size': '24px',
        'font-weight': '600'}}>{props.title}</p>
      <br />

     { [...Array(props.stars)].map((e, i) => <span className="busterCards" key={i}><Star /></span>)}
     { [...Array(5-props.stars)].map((e, i) => <span className="busterCards" key={i}><EmptyStar /></span>)}
     <span style = {{marginLeft: '10px'}}><mark>{props.num_of_reviews}</mark> reviews</span>
    
     </div>
     );
}

   
export default Header;