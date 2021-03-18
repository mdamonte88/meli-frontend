import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../store/actions/item'

class SearchPage extends PureComponent {

  componentWillMount() {
    this.props.loadItems();
  }

  renderItems(props) { 
    const items = props.map( item => {
      return <li key={item._id}> {item.title}- U$S {item.price} </li>
    })

    return <ul> { items } </ul>;
  }


  render() {
    const { itemsList } = this.props;

    return (
      <div className="slides-container homepage">
        SearchPage
        {this.renderItems(itemsList)} 
      </div>
    );
  }
}

const mapState = state => {
    return ({
      itemsList: state.items.itemsList.toJS()
    });
  }
  
  
  const mapDispatch = dispatch => ({
    loadItems: () => dispatch(getItems())
  });
  
  export default connect(mapState, mapDispatch)(SearchPage);