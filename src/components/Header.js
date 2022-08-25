import React from 'react';
import { Link } from 'react-router-dom';
import { header } from '../styles/modules/header.module.scss';
const Header = () => {

    return (
        <div className={header}>
            <ul>
                <li><Link to="/"> Home </Link></li>
                <li><Link to="/page/1"> Rick and Morty </Link></li>
                <li><Link to="/glamping"> Glamping </Link></li>
            </ul>
        </div>
    )
}

export default Header;