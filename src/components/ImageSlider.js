import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const Slideshow = () => {
    return (
        <div className="slide-container">
        <Fade>
          <div className="each-fade">
            <div className="image-container">
              <img src={require('./image_resources/phoneLogo.PNG').default} alt="" width='400px' height='400px'/>
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={require('./image_resources/Call.PNG').default} alt="" width='400px' height='400px'/>
            </div>
          </div>
        </Fade>
      </div>
    )
};

export default Slideshow;