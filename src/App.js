import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './sass/app.scss';
import Header from './components/header/header'
import SignInAndSignUp from './components/sign-in-and-sign-up/sign-in-and-sign-out';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {

    state = { currentUser: null };

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapshot => {
                    this.setState({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    });
                });
                return;
            }
            this.setState({
                currentUser: null
            });
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