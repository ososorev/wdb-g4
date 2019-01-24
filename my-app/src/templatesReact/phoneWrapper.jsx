import React, { Component } from 'react';
import phoneMarker from '../svg/phone.svg';

class PhoneWrapper extends React.Component {
    render() {
        return (
            <div className="d-flex align-items-center">
                <img className="mr-1" src={phoneMarker} alt="" />
                <a className="text-custom-primary" height="17px" href={"tel: "+this.props.phoneNumber}>{this.props.phoneNumberView}</a>
            </div>
        );
    }
}

export default PhoneWrapper;