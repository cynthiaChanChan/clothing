import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './sass/app.scss';
import Header from './components/header/header'
import SignInAndSignUp from './components/sign-in-and-sign-up/sign-in-and-sign-out';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/actions/user-action';

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

const mapDispatchToProps = {
    setCurrentUser
};

export default connect(null, mapDispatchToProps)(App);