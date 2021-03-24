import React, { Component } from 'react';


// Estilos
import './ItemSearchRow.scss';

class ItemSearchRow extends Component {

    render() {
        const { item = {} } = this.props;
        const { picture, price, title, condition, address = {}} = item;
        const { state_name = ''} = address;
        console.log('item', item);
        return (
            <div className="item-search-row" key={item._id}>
                <div className="content-data">
                    <img className="content-data__thumbnail" src={picture} alt=""/>
                </div>
                <div className="content-data">
                    <span className="content-data__price"> $ {price} 
                        {item.free_shipping && (
                            <span className="free-shipping"> </span> 
                        )
                        }
                    </span>
                    <span className="content-data__description"> {title }</span>
                    <span className="content-data__condition"> { condition } </span>
                </div>
                <div className="content-data">
                    <span className="content-data__location"> { state_name } </span>
                </div>
            </div>
        );
    }
}

export default ItemSearchRow;