import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getItemDetails } from '../store/actions/item'

class ItemDetailPage extends PureComponent {

  componentWillMount() {
    this.props.loadItem();
  }

  renderItems(item) { 
    return (
        <ul> 
            <li key={`title-${item._id}`}> Title: {item.title}</li>
            <li key={`price-${item._id}`}> Price: U$S {item.price} </li>
            <li key={`condition-${item._id}`}> Condition: {item.condition} </li>
            <li key={`free_shipping-${item._id}`}> Free Shipping: {item.free_shipping} </li>
            <li key={`sold_quantity-${item._id}`}> Sold Quanity: U$S {item.sold_quantity} </li>
            <li key={`description-${item._id}`}> Description: {item.description} </li>
        </ul>
    );
  }


  render() {
    const { itemDetails } = this.props;

    return (
      <div className="slides-container homepage">
        ItemDetailPage
        {this.renderItems(itemDetails)}
      </div>
    );
  }
}

const mapState = state => {
    return ({
      itemDetails: state.items.itemDetails.toJS()
    });
  }
  
  
  const mapDispatch = dispatch => ({
    loadItem: () => dispatch(getItemDetails('604e590ed564c60d21eb3fb3'))
  });
  
  export default connect(mapState, mapDispatch)(ItemDetailPage);