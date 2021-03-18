import React, { Component } from 'react';


// Estilos
import './Header.css';
import logo from '../../assets/Logo_ML.png';

class Header extends Component {
    render() {
        return (
            <header className="App-header" style={{minHeight: '50px', maxHeight: '150px'}}>
                <img src={logo} className="App-logo" alt="logo" />
                <input 
                    type="text" 
                    value="Nunca dejes de buscar" 
                    class="input-search"
                    autocomplete="off"
                    autocorrect="off"
                    autocapitalize="none"
                    spellcheck="false"
                    placeholder="Buscar"
                />
            </header>
        );
    }
}

export default Header;