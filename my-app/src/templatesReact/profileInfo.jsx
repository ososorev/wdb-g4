import React, { Component } from 'react';

class ProfileInfo extends Component {
    render() {
        return (
            <div className="d-inline-flex align-items-center">
                <img className="mr-2"  src={this.props.avatar} alt=""/>
                <span className="text-nowrap">{this.props.name}</span>
            </div>
        );
    }
}

export default ProfileInfo;