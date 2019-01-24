import React, { Component } from 'react';
import Request from './request/request';
import plus from '../../svg/plus.svg';

import avatarGirl from '../../svg/avatar-girl.svg';
import avatarMan2 from '../../svg/avatar-man-2.svg';

class AllRequests extends Component {
    constructor(props){
        super(props)
        this.createOrder=this.createOrder.bind(this)
    }

    createOrder(e){
        e.preventDefault();
        this.props.stateChanger({screenId: 4});
    }

    render() {
        return (
            <div className="mx-auto" style={{maxWidth: "700px"}}>
                <div className="d-flex flex-wrap justify-content-between my-2">
                    <input  className="form-control col-5 my-2" style={{width: "200px"}} type="search" placeholder="Search by" />
                    <button className="btn btn-custom-primary my-2" onClick={this.createOrder}>
                            <img src={plus} className="mr-2" alt="plus"/>
                            <span>Добавить запрос</span>
                    </button>
                </div>
                <Request    title="Нужна дрель с перфоратором" 
                            date="23 апреля - 25 апреля"
                            address="м. Чистые пруды"
                            name="Алина Краснова"
                            avatar={avatarGirl} />
                <Request    title="Детское кресло" 
                            date="26 апреля"
                            address="м. Библиотека Ленина"
                            name="Андрей Кораблев"
                            avatar={avatarMan2} />
                <Request    title="2x-местная палатка" 
                            date="2 мая -10 мая"
                            address="м. Чистые пруды"
                            name="Алина Краснова"
                            avatar={avatarGirl} />
            </div>
        );
    }
}

export default AllRequests;