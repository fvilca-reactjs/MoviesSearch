import React, { useState } from 'react'
//import {Card, Grid, Button, TextField } from '@material-ui/core';
import '../../App.css'

export default () => {

    const [searchText, setSearchText] = useState('')

    const handleSearchTextChange = (evt) => {
        setSearchText(evt.target.value);
    }
    return (
        <section>
            <div className="buscador">
                <div className="title-container">
                    <h1 className="title">Bienvenido ! </h1>
                    <span className="sign">***</span>
                </div>
                <input
                    value={searchText}
                    placeholder="Ingresa el texto a buscar"
                    onChange={handleSearchTextChange}>
                </input>
                <div className="container-buttons">
                    <button
                        onClick="handleCleanClick" 
                        className="with-border-green">
                        Limpiar
                    </button>
                    <button 
                        onClick="handleSearchClick" 
                        className="with-border-red">
                        Buscar
                    </button>
                </div>
            </div>
        </section>
    )
}