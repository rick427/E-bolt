import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchCollectionsStartAsync} from '../../redux/shop/shop-actions';
import CollectionContainer from '../../components/collections-overview/CollectionContainer';
import CollectionPageContainer from '../collection/CollectionPageContainer';

class ShopPage extends React.Component {
  componentDidMount(){
    const {fetchCollectionsStartAsync} = this.props
    fetchCollectionsStartAsync()
  }

  render(){
    const {match} = this.props;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionContainer} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})


export default connect(null, mapDispatchToProps)(ShopPage);