import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getItemDetails } from '../store/actions/item';
import BreadCrumb from '../components/breadCrump/BreadCrumb';


const ItemDetailPage = ({ match, itemDetails, loadItem }) => {
  const { id } = match.params;
  const { _id, picture, condition, sold_quantity = 0, title, price, description, categories=[] } = itemDetails;

  useEffect(() => {
    loadItem(id);
  }, [id, loadItem]);

  const addItemToCart = (title) => {
    console.log('item added', title);
  }

  return (
    <>
      <BreadCrumb crumbs={categories} />
      <div className="main-container itemDetailPage">
        <div className="item-details-container">
          <div className="item-details-image">
            <img src={picture} alt=""/>
          </div>
          <div className="item-details-data">
            <div key={`condition-${_id}`} className="item-details-data__condition"> {condition} - {sold_quantity} vendidos</div>
            <div key={`title-${_id}`} className="item-details-data__title"> {title}</div>
            <div key={`price-${_id}`} className="item-details-data__price"> $ {price} </div>
            
            <button className="x-small outlined" data-testid="btn-item-add" onClick={() => addItemToCart(title)}>
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

const mapState = state => {
    return ({
      itemDetails: state.items.itemDetails.toJS()
    });
  }
  
  
const mapDispatch = dispatch => ({
  loadItem: (id) => dispatch(getItemDetails(id))
});

export default connect(mapState, mapDispatch)(ItemDetailPage);