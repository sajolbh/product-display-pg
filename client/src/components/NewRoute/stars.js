import React from 'react';

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

  export {Star, EmptyStar};