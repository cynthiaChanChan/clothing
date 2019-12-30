import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './sass/app.scss';
import Header from './components/header/header'
import SignInAndSignUp from './components/sign-in-and-sign-up/sign-in-and-sign-out';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import CheckoutPage from './pages/checkout/checkout';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/actions/user-action';
import { selectCurrentUser } from './redux/selectors/user-selectors';

class App extends React.Component {

    state = { currentUser: null };

    unsubscribeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser } = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data()
                    });
                });
                return;
            }
            setCurrentUser(null);
        });
    }


    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/shop" component={ShopPage} />
                        <Route exact path="/checkout" component={CheckoutPage} />
                        <Route 
                            exact 
                            path="/signin" 
                            render = {() => 
                                this.props.currentUser ?
                                <Redirect to="/" />
                                : <SignInAndSignUp />
                            }
                        />
                    </Switch>
                </div>
            </BrowserRouter> 
        );
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }
};

const mapStatesToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = {
    setCurrentUser
};

export default connect(mapStatesToProps, mapDispatchToProps)(App);