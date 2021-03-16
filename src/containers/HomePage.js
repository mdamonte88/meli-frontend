import React, { PureComponent } from 'react';
import apiService from '../services/apiService';

class HomePage extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {items: []}
  }

  componentWillMount() {
    apiService.get('/items').then(res => {
      this.setState({items: res.items})
      console.log('YEAH', res)
    })
  }

  listItems(props) { 
    const items = props.map( item => {
      return <li key={item._id}> {item.title}- U$S {item.price} </li>
    })

    return <ul> { items } </ul>;
  }


  render() {
    const items = this.state.items;

    return (
      <div className="slides-container homepage">
        {this.listItems(items)} 
      </div>
    );
  }
}

export default HomePage;