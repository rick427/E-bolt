import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect'
import {selectIsCollectionLoaded} from '../../redux/shop/shop-selector';
import Spinner from '../../components/with-spinner/Spinner';
import CollectionPage from './Collection';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionLoaded(state)
});

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    Spinner
)(CollectionPage);

export default CollectionPageContainer;
