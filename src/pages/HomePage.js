import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return(
        <div className="links">
            <Link to="/page/1"> GO TO RICK AND MORTY PAGE 1</Link>
        </div>
    )
}

export default HomePage;