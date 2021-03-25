import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
//import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { getItems } from '../store/actions/item';
import ItemSearchRow from '../components/itemSearchRow/ItemSearchRow';
import BreadCrumb from '../components/breadCrump/BreadCrumb';


class SearchPage extends PureComponent {

  componentWillMount() {
    // let { name } = useParams();
    const { name = '' } = this.props.match.params;
    this.props.loadItems(name);
  }

  renderItems(props) { 
    const items = props.map( item => {
      console.log('itemMap ', item);
      //It works with mongoDB ids
      const id = item.id || item._id;
      return (
        <Link to={`/item/${id}`} style={{textDecoration: 'none'}}>
          <ItemSearchRow item={item} />
        </Link>
      )
    })

    return <div className="item-search-list"> { items } </div>;
  }


  render() {
    const { itemsList, categories } = this.props;
    
    return (
      <>
        <BreadCrumb crumbs={categories} />
        <div className="main-container searchPage">
          {this.renderItems(itemsList)} 
        </div>
      </>
    );
  }
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