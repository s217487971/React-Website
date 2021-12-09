import React from "react";
import './Footer-Style.css';

function FooterTab()
{
    return(
        <div className="main-footer">
        <div className="container">
          <div className="row">
            {/* Column1 */}
            <div className="col">
              <h4>Personal Information</h4>
              <h5 className="list-unstyled">
                <li>Sizwe, Sibanyoni</li>
                <li>Phone: 074 545 5261</li>
                <li>S217487971@mandela.ac.za</li>
                <li>sibanyonisizwe919@gmail.com</li>
              </h5>
            </div>
            {/* Column2 */}
            <div className="col">
              <h4>Residential Information </h4>
              <ui className="list-unstyled">
                <li>3184 1st Street, Old Etwatwa East</li>
                <li>Daveyton, Benoni</li>
                <li>1519</li>
              </ui>
            </div>
            {/* Column3 */}
            <div className="col">
              <h4>Qualification</h4>
              <ui className="list-unstyled">
                <li>Bsc Computer Science</li>
                <li>Programming</li>
                <li>Applied Mathematics</li>
              </ui>
            </div>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} Simple Website | All rights reserved |
              Terms Of Service | Privacy
            </p>
          </div>
        </div>
      </div>
    )
}

export default FooterTab;