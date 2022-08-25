import React from 'react';
import { Link } from 'react-router-dom';
import { homepage } from '../styles/modules/homepage.module.scss';

const HomePage = () => {
    return(
        <div className={homepage}>
            <ul>
                {/* <li><Link to="/page/1"> GO TO RICK AND MORTY PAGE 1</Link></li>
                <li><Link to="/glamping">GO TO GLAMPING PAGE</Link></li> */}
            </ul>
        </div>
    )
}

export default HomePage;