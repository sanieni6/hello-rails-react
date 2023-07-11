import React from 'react';
import Navlinks from './NavLink';
import '../../assets/stylesheets/application.css';

const Header = () => (
    <header className="main-header">
        <h1 className='title-header'>React on Rails</h1>
        <Navlinks />
    </header>
);

export default Header;