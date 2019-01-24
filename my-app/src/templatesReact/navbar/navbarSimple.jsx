import React, { Component } from 'react';
import brand from '../../svg/logo.svg';

class NavbarSimple extends Component{
    render(){
        return(
            <nav className="navbar navbar-light bg-white shadow-sm px-5">
                <a className="navbar-brand" href="#">
                    <img className="" src={brand} alt="Renthings"/>
                </a>
            </nav>
        );
    }
}

export default NavbarSimple;