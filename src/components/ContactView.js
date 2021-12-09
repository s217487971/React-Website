import React from "react";
import backGround3 from './image_resources/backGround3.PNG';

function Contactmethod()
{
    return(
        <div style={{ backgroundImage:`url(${backGround3})` }}>
                <div className="container">
                    <h3>Contact Information</h3>
                    <br/>
                    <div class="card" >
                    <div class="card bg-dark text-white">
                    <img src={require('./image_resources/pamphlet.PNG').default}  alt=""/>
  <div class="card-img-overlay">
    <h5 class="card-title">Residential Information</h5>
    <ui className="list-unstyled">
                <li>Home Address</li>
                <li>3184 1st Street, Old Etwatwa East</li>
                <li>Daveyton, Benoni</li>
                <li>1519</li>
              </ui>
  </div>
</div>
  <div class="card-body">
    <h5 class="card-title">Various Platforms of contact </h5>
    <p class="card-text">Found Anything Interesting I can do for you, Feel Free to contact us through any of the options.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><img src={require('./image_resources/callLogo.png').default} width="40px" height="40px" alt=""/> Call : 074 545 5261</li>
    <li class="list-group-item"><img src={require('./image_resources/emailLogo.png').default} width="40px" height="40px" alt=""/> Email : sibanyonisizwe919@gmail.com</li>
    <li class="list-group-item"><img src={require('./image_resources/Whatsapp-Logo.png').default} width="40px" height="40px" alt=""/> Whatsapp : +27745455261</li>
  </ul>
  <br/>
</div>
                </div>
                </div>
    )
}

export default Contactmethod;