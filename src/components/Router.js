import React, { useState } from "react";
import { HashRouter as Router, Route, Switch  } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/home";

export default () => { 
    const [isLoggendIn, setIsLoggedIn ] = useState(false);
    return (
        <Router>
            <Switch>
                {isLoggendIn ? (
                <>
                    <Route>
                        <Home/>
                    </Route> 
                </> 
                ):( 
                 <Route>
                    <Auth/>
                 </Route>
                )}
             
            </Switch>
        </Router>
    )
}

