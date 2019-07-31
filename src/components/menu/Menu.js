import React from 'react';
import {withRouter} from 'react-router-dom';
import './menu.styles.scss';

const Menu = ({title, imageUrl, size, history, match, linkUrl}) => (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}/>
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)

export default withRouter(Menu);
