import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header/Header.js';
import Description from './components/Description/Description.js';
import Buy from './components/BuyBox/Buy.js';
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {

      state = {product: []};

      componentDidMount(){
        fetch("api/product/")
        .then(response => response.json())
        .then(response => this.setState({product: response.data}))
        .catch(err => console.log(err))
    }

    renderMessages = ({id, title, price, discount, num_of_reviews, stars, description, processor, battery, memory, storage})=> <div style = {{
      border: '3px solid darkgray',
      margin: '2px',
      width: '80%','marginBottom': '2px', 'marginLeft': '10%',
      '-webkit-box-shadow': '-1px 1px 19px -3px rgba(0,0,0,0.57)',
      '-moz-box-shadow': '-1px 1px 19px -3px rgba(0,0,0,0.57)',
      'boxShadow': '-1px 1px 19px -3px rgba(0,0,0,0.57)',
      marginBottom: '10px'

     }}
     key = {id}>
     <div className = "row">
      <div className = "col col-3 d-flex align-items-center justify-content-center">
        <img src={ require('./images/'+ id + '.jpg') } 
        style = {{height: '200px', width: '200px'}}/>
      </div>

      <div className = "col col-6">
        <Header discount = {discount} title = {title} stars = {stars} num_of_reviews = {num_of_reviews}  />
        <Description description = {description} />

        <p>
  <a class="btn btn-primary" data-toggle="collapse" href= {"#multiCollapseExample"+ id}  role="button" aria-expanded="false" aria-controls="multiCollapseExample1">View Specs</a>
</p>
<div class="row">
  <div class="col">
    <div class="collapse multi-collapse" id= {"multiCollapseExample"+ id}>
      <div class="card card-body">
      <h3><u>Specifications</u></h3>
      <ul class="list-group">
  <li class="list-group-item">Processor --> Intel Core 8th Gen {processor} </li>
  <li class="list-group-item">Battery Life --> Upto {battery} hrs of local video playback</li>
  <li class="list-group-item">Memory --> {memory}GB RAM </li>
  <li class="list-group-item">Storage --> SSD of {storage}TB </li>
</ul>
      </div>
    </div>
  </div>
  
</div>

   
      </div>

      <div className = "col col-3">
        <Buy discount = {discount} price = {price} />  
      </div>
     </div>
     
     <br/> 
  
     <br /> 
      </div>

  render() {
    const {product} = this.state;
    return (
        
        <div className="App">
        {product.map(this.renderMessages)}
        </div>
      
    );
  }
}

export default App;
