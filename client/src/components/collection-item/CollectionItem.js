import React from 'react';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart-actions';
import './collection-item.scss';
import Button from '../button/Button';

const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl,} = item;
    return (
        <div className="collection-item">
            <div style={{backgroundImage: `url(${imageUrl})`}} className="image"/>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button className="custom-button inverted" onClick={() => addItem(item)}>Add to cart</Button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
