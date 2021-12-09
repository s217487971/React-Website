import React from "react";
import backGround3 from './image_resources/backGround3.PNG'


function Aboutmethod()
{
   

    return(
        <div style={{ backgroundImage:`url(${backGround3})` }}>
      <div className="container">
          <br/>
          <div className="row">
              {/**Card View PlaceHolder */}
              <div className="col">

              <div class="card text-center">
    <div class="card-body">
    <img src={require('./image_resources/phoneLogo.PNG').default} width="400px" alt=""/>
    <h4 class="card-title">What I Do</h4>
    <p class="card-text">I can Build websites, Android Applications, Java Server Applications and Databases. I used SOLID code principles, Software Development Life Cycle and Agile Development. I debug existing applications and test fuctionality. 
                       </p>

  </div>
</div>
              </div>
          </div>
          <br/>
          <nav class="navbar navbar-expand-lg navbar-light bg-primary">
          <h4><span  class="badge bg-primary" style={{'align-items':'center'}} >Academic Information</span></h4>
        </nav>
        <br/>
        <div class="card">
  <div class="card-header">
    <h5>Nelson Mandel University</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Bsc Computer Science</li>
    <li class="list-group-item">Major : Computer Science</li>
    <li class="list-group-item">Major : Applied Mathematics</li>
  </ul>
</div>
                  <br/>
      <nav class="navbar navbar-expand-lg navbar-light bg-primary">
          <h4 class="centered"><span  class="badge bg-primary" >My Values</span></h4>
        </nav>
        <br/>
        <div className="row">
                <div className="col">
                    <div class="card text-center">
                    <div class="card-body">
                    <h5 class="card-title">Team Work</h5>
                    <p class="card-text">Working as a Team is great and improves soft skills.</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                <div class="card text-center">
                    <div class="card-body">
                    <h5 class="card-title">Perservernace</h5>
                    <p class="card-text">Tyring over and over despite failures leads to sucess.</p>
                    </div>
                    </div>
                
                </div>
            </div>
            <br/>
            <div className="row">
            <div className="col">
            <div class="card text-center">
                    <div class="card-body">
                    <h5 class="card-title">Hard Work</h5>
                    <p class="card-text">Investing time and resources to a course eventually returns positive feedback.</p>
                    </div>
                    </div>
            </div>
            <div className="col">
            <div class="card text-center">
                    <div class="card-body">
                    <h5 class="card-title">Research</h5>
                    <p class="card-text">Observing, testing and monitoring improves understanding and allows room for innovation.</p>
                    </div>
                    </div>
            </div>
            </div>
      </div>
      
        <br/>
      </div>
    )
}

export default Aboutmethod;