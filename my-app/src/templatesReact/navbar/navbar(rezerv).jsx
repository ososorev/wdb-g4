import React, { Component } from 'react';
import AddressWrapper from '../../templatesReact/addressWrapper';
import ProfileInfo from '../../templatesReact/profileInfo';
import brand from '../../svg/logo.svg';

import avatarMan from '../../svg/avatar-man-1.svg';

class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-5">
                <div className="d-flex flex-nowrap border flex-grow-1 justify-content-between align-items-center">
                    <a className="navbar-brand" href="#">
                        <img className="border" src={brand} alt="Renthings"/>
                    </a>
                    <div className="navbar-nav d-none d-sm-flex flex-row text-center border border-success">
                            <div className="nav-item border">
                                <a className="nav-link active px-2" href="#">Все запросы
                                    {/* что за??? */}
                                    <span className="sr-only">(current)</span>
                                </a>
                            </div>
                            <div className="nav-item border">
                                <a className="nav-link px-2" href="#">Мои запросы</a>
                            </div>
                            <div className="nav-item border">
                                <a className="nav-link px-2" href="#">Мои отклики</a>
                            </div>
                    </div>
                    <button className="navbar-toggler ml-sm-3" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="flex-shrink-0 collapse navbar-collapse border border-warning" id="navbarNav">
                    <div className="navbar-nav d-sm-none border border-success">
                        <div className="nav-item border">
                            <a className="nav-link active" href="#">Все запросы
                                {/* что за??? */}
                                <span class="sr-only">(current)</span>
                            </a>
                        </div>
                        <div className="nav-item border">
                            <a className="nav-link" href="#">Мои запросы</a>
                        </div>
                        <div className="nav-item border">
                            <a className="nav-link" href="#">Мои отклики</a>
                        </div>
                    </div>
                    <div className="navbar-nav ml-auto border border-success">
                        <div className="nav-item">
                            <a className="nav-link border" href="#">
                                <AddressWrapper address="Казань" />
                            </a>
                        </div>
                        <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle d-flex align-items-center py-0 border" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <ProfileInfo name="Михаил Смирнов" avatar={avatarMan} />
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;