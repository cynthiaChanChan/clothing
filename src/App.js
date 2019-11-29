import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './sass/app.scss';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/shop" component={ShopPage} />
                </Switch>
            </div>
        </BrowserRouter> 
    );
};

export default App;