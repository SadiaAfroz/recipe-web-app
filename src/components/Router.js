import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from '../App';
import Recipe from './Recipe';

const Router=()=>(
    <BrowserRouter>
        <Switch>
            <Route path='/' component={App} exact/> {/* used exact for only '/' is considered for App component*/}
            <Route path='/recipe' component={Recipe}/>   {/*when this path will be hit then "Recipe" component will be rendered  */}
        </Switch>
    </BrowserRouter>
);

export default Router;