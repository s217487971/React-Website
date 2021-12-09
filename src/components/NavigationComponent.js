import React from "react";
import { Link } from "react-router-dom";

function NavigatorTab()
{
    return (

        <React.Fragment>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
            <img src={require('./image_resources/LogoImage.PNG').default} height='60px' width='60px' alt=""/>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <Link class="nav-link" to='/homepage'><h5>Home</h5></Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link" to='/aboutpage'> <h5>About</h5> </Link>
             </li>
            <li class="nav-item">
             <Link class="nav-link" to='/contactpage'> <h5>Contact</h5></Link>
             </li>
            </ul>
            <h2><span class="badge bg-primary"> S217487971, Sizwe Sibanyoni</span></h2>
    </div>
  </div>
</nav>
        </React.Fragment>
    )
}
export default NavigatorTab;