import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/selectors/user-selectors';
import { auth } from '../../firebase/firebase.utils';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import CardIcon from '../card-icon/card-icon';
import { ReactComponent as Logo } from '../../assets/logo.svg';


const Header = ({ currentUser, history }) => {
    return (
        <header className="header">
            <div className="logo-container">
                <Logo className="logo" onClick={() => history.push('/')} />
            </div>
            <div className="options">
                <Link to="/shop" className="option">shop</Link>
                <Link to="/contact" className="option">contact</Link>
                {
                    currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>Sign out</div>
                    : <Link to="/signin" className="option">Sign in</Link>
                }
                <CardIcon />
            </div>
            <CartDropdown />
        </header>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

export default withRouter(connect(mapStateToProps)(Header));