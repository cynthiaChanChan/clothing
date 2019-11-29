import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';

const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <Logo className="logo" />
            </div>
            <div className="options">
                <Link to="/shop" className="option">shop</Link>
                <Link to="/contact" className="option">contact</Link>
            </div>
        </header>
    );
};

export default Header;