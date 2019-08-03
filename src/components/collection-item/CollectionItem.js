import React from 'react';
import './collection-item.scss';
import Button from '../button/Button';

const CollectionItem = ({id, name, price, imageUrl}) => {
    return (
        <div className="collection-item">
            <div style={{backgroundImage: `url(${imageUrl})`}} className="image"/>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button className="custom-button inverted">Add to cart</Button>
        </div>
    )
}

export default CollectionItem;
