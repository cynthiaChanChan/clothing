import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './sass/app.scss';
import Header from './components/header/header';
import ErrorBoundary from './components/error-boundary/error-boundary';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/actions/user-action';
import { selectCurrentUser } from './redux/selectors/user-selectors';
import Spinner from './components/spinner/spinner'

const HomePage = lazy(() => import('./pages/homepage/homepage'))
const ShopPage = lazy(() => import('./pages/shop/shop'))
const SignInAndSignUp = lazy(() => import('./components/sign-in-and-sign-up/sign-in-and-sign-out'))
const CheckoutPage = lazy(() => import('./pages/checkout/checkout'))

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
                        <ErrorBoundary>
                            <Suspense fallback={<Spinner />}>
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
                            </Suspense>
                        </ErrorBoundary>
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
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = {
    setCurrentUser
};

export default connect(mapStatesToProps, mapDispatchToProps)(App);