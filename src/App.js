import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './sass/app.scss';
import Header from './components/header/header'
import SignInAndSignUp from './components/sign-in-and-sign-up/sign-in-and-sign-out';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/shop" component={ShopPage} />
                    <Route exact path="/signin" component={SignInAndSignUp} />
                </Switch>
            </div>
        </BrowserRouter> 
    );
};

export default App;