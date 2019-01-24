import React, { Component } from 'react';
import addressMarker from '../svg/placeholder.svg';

class AddressWrapper extends Component {
    render() {
        return (
            <div className="d-flex align-items-center">
                <img className="mr-2" height="17px" src={addressMarker} alt=""/>
                <span >{this.props.address}</span>
            </div>
        );
    }
}

export default AddressWrapper;