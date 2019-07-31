import React from 'react';
import './homepage.styles.scss';
import Directory from '../../directory/Directory';

const HomePage = (props) => {
    console.log(props)
    return (
        <div className="homepage">
            <Directory/>
        </div>
    )
}

export default HomePage;
