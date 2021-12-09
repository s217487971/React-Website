import React from "react";
import Homemethod from "./HomeView";
import Aboutmethod from "./AboutView";
import Contactmethod from "./ContactView";

import {Switch, Route, Redirect, withRouter} from 'react-router-dom'
import NavigatorTab from "./NavigationComponent";
import FooterTab from "./FooterView"


function Mainview()
{
    return(
        <React.Fragment>
        <NavigatorTab/>
           <Switch>
               <Route path='/homepage' component={Homemethod}/>
               <Route path='/aboutpage' component={Aboutmethod}/>
               <Route path='/contactpage' component={Contactmethod}/>
               <Redirect to='homepage'/>
           </Switch>
           <FooterTab/>
        </React.Fragment>
        
    )
}

export default withRouter(Mainview);