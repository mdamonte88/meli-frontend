import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getItemDetails } from '../store/actions/item'
import BreadCrumb from '../components/breadCrump/BreadCrumb'

class ItemDetailPage extends PureComponent {

  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.loadItem(id);
  }

  addItemToCart(title) {
    console.log('item added', title);
  }

  render() {
    const { itemDetails } = this.props;
    const { picture, condition, sold_quantity = 0, title, price, description } = itemDetails;
    const crumbs = [
      {key: 1, name: 'Electronica Audio y Video', path: ''},
      {key: 2, name: 'Ipod', path: ''},
      {key: 3, name: 'Ipod touch'},
      {key: 4, name: '32GB'}
    ]
    return (
      <>
        <BreadCrumb crumbs={crumbs} />
        <div className="main-container itemDetailPage">
          <div className="item-details-container">
            <div className="item-details-image">
              <img src={picture} alt=""/>
            </div>
            <div className="item-details-data">
              <div key={`condition-${itemDetails._id}`} className="item-details-data__condition"> {condition} - {sold_quantity} vendidos</div>
              <div key={`title-${itemDetails._id}`} className="item-details-data__title"> {title}</div>
              <div key={`price-${itemDetails._id}`} className="item-details-data__price"> $ {price} </div>
              
              <button className="x-small outlined" data-testid="btn-item-add" onClick={() => this.addItemToCart(title)}>
                Comprar
              </button>
            </div>
            <div className="item-details-description">
              <span className="item-details-description__title"> Description del producto </span>
              <span className="item-details-description__text"> {description} </span> 
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapState = state => {
    return ({
      itemDetails: state.items.itemDetails.toJS()
    });
  }
  
  
  const mapDispatch = dispatch => ({
    loadItem: (id) => dispatch(getItemDetails(id))
  });
  
  export default connect(mapState, mapDispatch)(ItemDetailPage);