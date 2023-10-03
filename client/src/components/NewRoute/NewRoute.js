import React from 'react';

import Header from '../Header/Header.js';
import Description from '../Description/Description.js';
import Buy from '../BuyBox/Buy.js';

import data from './data.js';

import {Star, EmptyStar} from './stars.js';


const NewRoute = ({match})=>{
    
    const identity = match.params.id - 1;

    const  {id, stars, num_of_reviews, title, discount, description, price} = data.products[identity];
   
    const {Dimensions, Display, Memory, Processor, Batterylife, Graphics, Storage5, Connections, Security, Software} = data.products[identity];
    
    const {reviews} = data.products[identity];
    const overall_stars = reviews.overall.stars;
    const dist = reviews.overall.distribution;

    const review_data = reviews.list;

    return (
<div>
        <div style = {{
            border: '3px solid darkgray',
            margin: '2px',
            width: '80%','marginBottom': '2px', 'marginLeft': '10%',
            '-webkit-box-shadow': '-1px 1px 19px -3px rgba(0,0,0,0.57)',
            '-moz-box-shadow': '-1px 1px 19px -3px rgba(0,0,0,0.57)',
            'boxShadow': '-1px 1px 19px -3px rgba(0,0,0,0.57)',
            marginBottom: '10px'
      
           }}>
           
           <div className = "row">

             <div className = "col col-3 d-flex align-items-center justify-content-center">
                <img src={ require('../../images/'+ id + '.jpg') } 
                     style = {{height: '200px', width: '200px'}}/>
            </div>

            <div className = "col col-6">
                <Header discount = {discount} title = {title} stars = {stars} num_of_reviews = {num_of_reviews}  />
                <Description description = {description} />
            </div>
 
            <div className = "col col-3">
                <Buy discount = {discount} price = {price} />  
            </div>
   
         </div>
        
    </div>
    <div class = "row" style = {{marginLeft: '45%'}}>
    <p>
    <a data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"
    >
      Techspecs
    </a>  

    <a data-toggle="collapse" href="#collapseExampleReview" role="button" aria-expanded="false" aria-controls="collapseExample"
           style ={{marginLeft:'50px'}}
    >
      Reviews
    </a>  
  </p>
  </div>
  <div class = "container">

  <div class="collapse" id="collapseExample">
    <p className="m-0 mb-4 ml-4 border-bottom">
    <span className="tech_spec"> <b> Dimensions </b> </span>
    <span className="tech_fields" style = {{float: 'right'}}>{Dimensions}</span>
  </p>
  <p className="m-0 mb-4 ml-4  border-bottom" >
    <span className="tech_spec"> <b> Display </b> </span>
    <span className="tech_fields" style = {{float: 'right'}}>{Display}</span>
  </p>
  <p className="m-0 mb-4 ml-4 border-bottom">
    <span className="tech_spec"> <b> Memory </b> </span>
    <span className="tech_fields" style = {{float: 'right'}}>{Memory}</span>
  </p>
  <p className="m-0 mb-4 ml-4 border-bottom">
    <span className="tech_spec"> <b>Processor </b></span>
    <span className="tech_fields" style = {{float: 'right'}}>{Processor}</span>
  </p>
  <p className="m-0 mb-4 ml-4 border-bottom">
    <span className="tech_spec"> <b>Batterylife </b></span>
    <span className="tech_fields" style = {{float: 'right'}}>{Batterylife}</span>
  </p>
  <p className="m-0 mb-4 ml-4 border-bottom">
    <span className="tech_spec"> <b>Graphics</b></span>
    <span className="tech_fields" style = {{float: 'right'}}>{Graphics}</span>
  </p>
  <p className="m-0 mb-4 ml-4 border-bottom">
    <span className="tech_spec"> <b>Storage5</b></span>
    <span className="tech_fields" style = {{float: 'right'}}>{Storage5}</span>
  </p>
  <p className="m-0 mb-4 ml-4 border-bottom displayConnection">
    <span className="tech_spec "><b>Connections</b></span>
    <span className="tech_fields displayField" style = {{float: 'right'}}>{Connections}</span>
  </p>
  <p className="m-0 mb-4 ml-4 border-bottom displaySecurity">
    <span className="tech_spec"><b>Security</b></span>
    <span className="tech_fields displayFieldSecurity" style = {{float: 'right'}}>{Security}</span>
  </p>
  <p className="m-0 mb-4 ml-4 border-bottom displaySoftware">
    <span className="tech_spec "><b>Software</b></span>
    <span className="tech_fields displayField " style = {{float: 'right'}}>{Software}</span>
  </p>
    </div>
  </div>

  <div class="collapse" id="collapseExampleReview">
    <div class = "container">

    { [...Array(review_data.length)].map((e, i) => <span className="busterCards" key={i}>
          <div class = "row jumbotron">
          <div class = "col col-3">
             <div style = {{backgroundColor:'black', borderRadius: '50%', height: '50px', width: '50px'}}>
             <span style = {{color:'white', marginLeft: '10px', fontSize: '2rem'}}>{review_data[i].username[0]}</span>
             </div>
          </div>

          <div class = "col col-9">
             { [...Array(review_data[i].stars)].map((e, i) => <span className="busterCards" key={i}><Star /></span>)}
              { [...Array(5-review_data[i].stars)].map((e, i) => <span className="busterCards" key={i}><EmptyStar /></span>)}
             <br/>
             <b>{review_data[i].heading}</b>
             <br />
            <span class="blockquote" style = {{'fontSize': '15px',
            'fontFamily': 'Segoe UI,SegoeUI,"Helvetica Neue",Helvetica,Arial,sans-serif'}}> {review_data[i].desc}</span>
             <br />
             {review_data[i].helpful } people found it useful

          </div>
     </div>
    </span>)}

    </div>
  </div>
   
        
 </div>
        
    );
}

export default NewRoute;