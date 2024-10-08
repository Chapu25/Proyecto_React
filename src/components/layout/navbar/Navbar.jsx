import React from 'react'
import "./navbar.css"
import { CardWidget } from '../../common/cartWidget/CardWidget';


export const Navbar = () => {
return (
    
    <>
    
    <div className="container_navbar">
        
        <img src="/public/logo.png" alt="logo" />

        <ul>
            <li>Todos</li>
            <li>Vodka</li>
            <li>Vinos</li>
            <li>Wishky</li>
        </ul>

        
        <CardWidget/>
    </div>
    

    </>
    )
};
