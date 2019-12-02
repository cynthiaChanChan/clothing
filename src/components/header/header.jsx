import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/logo.svg';

import { connect } from 'react-redux';

const Header = ({ currentUser }) => {
    return (
        <header className="header">
            <div className="logo-container">
                <Logo className="logo" />
            </div>
            <div className="options">
                <Link to="/shop" className="option">shop</Link>
                <Link to="/contact" className="option">contact</Link>
                {
                    currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>Sign out</div>
                    : <Link to="/signin" className="option">Sign in</Link>
                }
            </div>
        </header>
    );
};

const mapStateToProps = state => {
    return { currentUser: state.user.currentUser };
};

export default connect(mapStateToProps)(Header);