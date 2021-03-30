import React, { useRef, useState } from 'react';
import { withRouter } from "react-router";

// Estilos
import './Header.scss';
import logo from '../../assets/Logo_ML.png';

const Header = ({history}) => {
    const [query, setQuery] = useState('');
    const searchInput = useRef(null);
    

    const goHome = () => {
        setQuery('');
        history.push('/');
        searchInput.current.value = '';
    }

    const goSearchPage = () => {
        const url = '/items/search/'+ query
        history.push(url);
    }

    const handleOnchange = (e) => {
        const value = e.nativeEvent.target.value;
        setQuery(value);
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            goSearchPage();
        }
    }

    return (
        <header className="app-header" style={{minHeight: '50px', maxHeight: '150px'}}>
                <img src={logo} className="app-logo" alt="logo" onClick={() => goHome()} />
            
            <input 
                type="text" 
                ref={searchInput}
                className = "search-input"
                placeholder="Nunca dejes de buscar"
                onChange={(e) => handleOnchange(e)}
                onKeyDown={(e) => handleKeyDown(e)}
            />
            <button className="search-button" type="submit" onClick={() => goSearchPage()}/>
        </header>
    );
}

export default withRouter(Header);