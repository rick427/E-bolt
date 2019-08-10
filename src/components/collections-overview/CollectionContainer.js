import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {selectIsCollectionFetching} from '../../redux/shop/shop-selector';
import {compose} from 'redux';
import Spinner from '../with-spinner/Spinner';
import CollectionOverview from './CollectionsOverview';

const mapStateToprops = createStructuredSelector({
    isLoading: selectIsCollectionFetching
})


const CollectionContainer = compose(
    connect(mapStateToprops),
    Spinner
)(CollectionOverview);

export default CollectionContainer;

