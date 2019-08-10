import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateCollections} from '../../redux/shop/shop-actions';
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import CollectionPage from '../collection/Collection';
import {firestore, convertCollectionsToSnapshot} from '../../firebase/firebase.utils';


class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount(){
    const collectionRef = firestore.collection('collections');
    const {updateCollections} = this.props;

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionMap = convertCollectionsToSnapshot(snapshot)
      updateCollections(collectionMap);
    })
  }

  render(){
    const {match} = this.props;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview}/>
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
})


export default connect(null, mapDispatchToProps)(ShopPage);