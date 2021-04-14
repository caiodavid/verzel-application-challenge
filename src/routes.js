import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Home from './pages/Home';
import UserPage from './pages/UserPage';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
               <Redirect exact from='/' to="/home"  />
							 <Route path='/home' component={Home} />
							 <Route path='/tasks' component={UserPage} />
            </Switch>        
        </BrowserRouter>
    );
}