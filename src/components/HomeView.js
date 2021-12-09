import React from "react";
import Slider from "./ImageSlider";
import Slideshow from "./WebsiteSlider";
import backGround3 from './image_resources/backGround3.PNG';

function Homemethod()
{
    return(
        <div style={{ backgroundImage:`url(${backGround3})` }}>

              <div class="container" >
    <br/>
    <h3 class="font-weight-bold">
        Welcome, This is SIZWE
    </h3>
    <br/>
    <p>Hundreds of Hours have been invested into learning and research so we can make your Business a Success. Through cutting edge technologies and relaible methods we have got your back.</p>
    <h5>Let's Build Innovative Application</h5>
    <h5>Let's Build Websites and Help Businesses</h5>
    <h5>Let's Store Valuable Data</h5>
    <br/>
    <div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
    <Slider/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h4 class="card-title">Android</h4>
        <p class="card-text">Scalable Mobile Applications with Optimised Performance to Suit your needs.</p>
        
      </div>
    </div>
  </div>
</div>
            <br/>


        <div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
    <Slideshow/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Websites</h5>
        <p class="card-text">Visually appealing and fully functional websites to make your life Easier.</p>
      </div>
    </div>
  </div>
</div>
<br/>
<nav class="navbar navbar-expand-lg navbar-light bg-primary">
<h2><span class="badge bg-primary"> Softwares Solutions Made For You </span></h2>
            </nav>
            <br/>

            <div class="card bg-dark text-white">
            <img src={require('./image_resources/backGround.PNG').default}  alt=""/>
  <div class="card-img-overlay">
    <h5 class="card-title">Innovation </h5>
    <p class="card-text">Using cutting-edge technologies to reach your Technical Goals.</p>
  </div>
</div>






            </div>
          
        
            
        
            
            
            <br/>

      </div>
    )
}

export default Homemethod;