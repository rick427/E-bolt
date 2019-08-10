import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {fetchCollectionsStartAsync} from '../../redux/shop/shop-actions';
import {selectIsCollectionFetching, selectIsCollectionLoaded} from '../../redux/shop/shop-selector';
import WithSpinner from '../../components/with-spinner/Spinner';
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import CollectionPage from '../collection/Collection';

const CollectionOverviewSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount(){
    const {fetchCollectionsStartAsync} = this.props
    fetchCollectionsStartAsync()
  }

  render(){
    const {match, isCollectionFetching, isCollectionLoaded} = this.props;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render={(props) => (
          <CollectionOverviewSpinner isLoading={isCollectionFetching} {...props} /> 
        )}/>
        <Route path={`${match.path}/:collectionId`} render={(props) => (
          <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props}/>
        )}/>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionLoaded
})

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})


export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);