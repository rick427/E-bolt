import React, { Component } from 'react';
import SHOP_DATA from './shop_data';
import CollectionPreview from '../../collection-preview/CollectionPreview';

class Shop extends Component {
    constructor(props){
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        const {collections} = this.state;
        return (
            <div>
                {collections.map(({id, ...otherProps}) => (
                    <CollectionPreview key={id} {...otherProps} />
                ))}
            </div>
        )
    }
}

export default Shop;
