import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './sass/app.scss';
import Header from './components/header/header'
import SignInAndSignUp from './components/sign-in-and-sign-up/sign-in-and-sign-out';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {

    state = { currentUser: null };

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
            this.setState({ currentUser: user });
            console.log("user: ", user);
        });
    }


    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header currentUser={this.state.currentUser} />
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/shop" component={ShopPage} />
                        <Route exact path="/signin" component={SignInAndSignUp} />
                    </Switch>
                </div>
            </BrowserRouter> 
        );
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }
};

export default App;