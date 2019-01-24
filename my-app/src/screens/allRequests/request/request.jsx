import React, { Component } from 'react';
import ProfileInfo from '../../../templatesReact/profileInfo';
import AddressWrapper from '../../../templatesReact/addressWrapper';

class Request extends Component {
    render() {
        return (
            <div className="px-5 py-4 my-4 bg-white shadow-sm rounded">
                <div className="d-flex flex-wrap align-items-end justify-content-between">
                    <h4 className="m-0 pr-3">{this.props.title}</h4>
                    <div>{this.props.date}</div>
                </div>
                <AddressWrapper address={this.props.address} />
                <div className="mt-4 d-flex flex-wrap align-items-center justify-content-between">
                    <ProfileInfo name={this.props.name} avatar={this.props.avatar} />
                    <button className="btn btn-custom-primary">Откликнуться</button>
                </div>
            </div>
        );
    }
}

export default Request;