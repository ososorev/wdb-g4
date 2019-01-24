import React, { Component } from 'react';
import AddressWrapper from '../../templatesReact/addressWrapper';
import ProfileInfo from '../../templatesReact/profileInfo';
import brand from '../../svg/logo.svg';

import avatarMan from '../../svg/avatar-man-1.svg';
import MyRequests from '../../screens/myRequests/myRequests';


import ReactDOM from 'react-dom';

class Navbar extends Component{
    constructor(props){
        super(props);
        this.state={
            active: "active"
        }
        this.createMyRequests=this.createMyRequests.bind(this);
        this.createAllRequests=this.createAllRequests.bind(this);
        this.createMyResponse=this.createMyResponse.bind(this);
        this.createProfile=this.createProfile.bind(this);
    }


    createAllRequests(e){
        e.preventDefault();
        this.props.stateChanger({screenId: 0});
    }
    createMyRequests(e){
        // ReactDOM.render(<MyRequests />,document.getElementById('root'));
        e.preventDefault();
        this.props.stateChanger({screenId: 1});
    }
    createMyResponse(e){
        e.preventDefault();
        alert("Сделать");
        this.props.stateChanger({screenId: 2});
    }

    createProfile(e){
        e.preventDefault();
        this.props.stateChanger({screenId: 3});
    }

    render(){
        let activity=[];
        switch (this.props.screenId){
            case (0):activity=["active"," "," "];
                break;
            case (1):activity=[" ","active"," "];
                break;
            case (2):activity=[" "," ","active"];
                break;
        }
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-5 py-0 mb-4 align-items-stretch">
                <div className="d-flex flex-nowrap flex-grow-1 justify-content-between align-items-center" >
                    <a className="navbar-brand d-flex align-items-center col p-0" href="#" onClick={this.createAllRequests} style={{minHeight: "70px"}}>
                        <img className="" src={brand} alt="Renthings"/>
                    </a>
                    <div className="navbar-nav nav-tabs d-none d-sm-flex flex-row text-center font-weight-bold align-self-stretch">
                    <a className={"nav-item nav-link "+ activity[0] +"  px-2 d-flex align-items-center"} href="#" onClick={this.createAllRequests}>Все запросы
                            {/* что за??? */}
                            <span className="sr-only">(current)</span>
                        </a>
                        <a className={"nav-item nav-link "+ activity[1] +"  px-2 d-flex align-items-center"} href="#" onClick={this.createMyRequests}>Мои запросы</a>
                        <a className={"nav-item nav-link "+ activity[2] +"  px-2 d-flex align-items-center"} href="#" onClick={this.createMyResponse}>Мои отклики</a>
                    </div>

                    <div className="navbar-nav col ml-3 d-none d-lg-flex px-0 justify-content-end align-items-center">
                        <div className="nav-item ">
                            <a className="nav-link" href="#">
                                <AddressWrapper address="Казань" />
                            </a>
                        </div>
                        <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle d-flex align-items-center m-0 p-0" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <ProfileInfo name="Михаил Смирнов" avatar={avatarMan} />
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#" onClick={this.createProfile}>Профиль</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                    </div>

                    <div className="col d-lg-none d-flex justify-content-end px-0 ml-3">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    </div>
                </div>
                <div className="flex-grow-0 collapse navbar-collapse pb-2" id="navbarNav">
                    <div className="navbar-nav d-sm-none">
                        <div className="nav-item">
                            <a className={"nav-link "+activity[0]} href="#" onClick={this.createAllRequests}>Все запросы
                                {/* что за??? */}
                                <span class="sr-only">(current)</span>
                            </a>
                        </div>
                        <div className="nav-item">
                            <a className={"nav-link "+activity[1]} href="#" onClick={this.createMyRequests} >Мои запросы</a>
                        </div>
                        <div className="nav-item">
                            <a className={"nav-link "+activity[2]} href="#" onClick={this.createMyResponse}>Мои отклики</a>
                        </div>
                    </div>
                    <div className="navbar-nav d-lg-none">
                        <div className="nav-item">
                            <a className="nav-link" href="#">
                                <AddressWrapper address="Казань" />
                            </a>
                        </div>
                        <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle d-flex align-items-center py-0" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <ProfileInfo name="Михаил Смирнов" avatar={avatarMan} />
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#" onClick={this.createProfile}>Профиль</a>
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