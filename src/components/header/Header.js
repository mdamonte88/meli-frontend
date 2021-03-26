import React, { Component } from 'react';
import { withRouter } from "react-router";

// Estilos
import './Header.scss';
import logo from '../../assets/Logo_ML.png';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: ''
        };
    }

    goHome() {
        this.props.history.push('/');
    }

    goSearchPage() {
        const { query } = this.state;
        const url = '/items/search/'+ query
        this.props.history.push(url);
    }

    handleOnchange(e) {
        const value = e.nativeEvent.target.value;
        this.setState(() => ({ query: value }) );
    }

    handleKeyDown(e) {
        if (e.key === 'Enter') {
            this.goSearchPage();
        }
    }

    render() {
        return (
            <header className="app-header" style={{minHeight: '50px', maxHeight: '150px'}}>
                 <img src={logo} className="app-logo" alt="logo" onClick={() => this.goHome()} />
                
                <input 
                    type="text" 
                    className = "search-input"
                    placeholder="Nunca dejes de buscar"
                    onChange={(e) => this.handleOnchange(e)}
                    onKeyDown={(e) => this.handleKeyDown(e)}
                />
                <button className="search-button" type="submit" onClick={() => this.goSearchPage()}/>
            </header>
        );
    }
}

export default withRouter(Header);