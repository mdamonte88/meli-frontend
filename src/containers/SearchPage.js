import React, { useEffect } from 'react';
import { connect } from 'react-redux';
//import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { getItems } from '../store/actions/item';
import ItemSearchRow from '../components/itemSearchRow/ItemSearchRow';
import BreadCrumb from '../components/breadCrump/BreadCrumb';

const SearchPage = ({ match, loadItems, itemsList, categories }) => {
  const { name = '' } = match.params;

  useEffect(() => {
    loadItems(name);
  }, [name, loadItems]);

  const renderItems = (props) => { 
    const items = props.map( item => {
      //It works with mongoDB ids
      const id = item.id || item._id;

      return (
        <Link key={`searchRow-${id}`} to={`/item/${id}`} style={{textDecoration: 'none'}}>
          <ItemSearchRow item={item} />
        </Link>
      )
    })

    return <div className="item-search-list"> { items } </div>;
  }
    
  return (
    <>
      <BreadCrumb crumbs={categories} />
      <div className="main-container searchPage">
        {renderItems(itemsList)} 
      </div>
    </>
  );
}

const mapState = state => {
    return ({
      itemsList: state.items.itemsList.toJS(),
      categories: state.items.categories.toJS()
    });
  }
  
  
  const mapDispatch = dispatch => ({
    loadItems: (name) => dispatch(getItems(name))
  });
  
  export default connect(mapState, mapDispatch)(SearchPage);