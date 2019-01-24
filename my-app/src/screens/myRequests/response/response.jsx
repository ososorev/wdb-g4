import React, { Component } from 'react';
import ProfileInfo from '../../../templatesReact/profileInfo';
import AddressWrapper from '../../../templatesReact/addressWrapper';
import TextField from '../../../templatesReact/textField';

import ruble from '../../../svg/ruble_sign.svg';//поменять

class Response extends Component {
    render() {
        return (
            <div className="my-4 bg-white shadow-sm rounded">
                <div className="px-4 py-2 border-bottom d-flex flex-wrap justify-content-between align-items-center">
                    <ProfileInfo name={this.props.name} avatar={this.props.avatar} />
                    <AddressWrapper address={this.props.address} />
                </div>
                <div className="px-4 py-4 my- ">
                    <div className="mb-3">
                        <small className="text-muted">Цена:</small>
                        <div className="d-flex">
                            <p style={{fontSize: "2.0rem"}}><strong>{this.props.price}</strong></p>
                            <img src={ruble} alt=""/>
                        </div>
                    </div> 
                    <TextField title="Описание:" description={this.props.description}/>
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-custom-secondary mr-3">Отказать</button>
                        <button className="btn btn-custom-primary">Выбрать</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Response;