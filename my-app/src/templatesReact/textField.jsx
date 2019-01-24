import React, { Component } from 'react';

class TextField extends Component {
    render() {
        return (
            <div className="mb-3">
                <small className="text-muted">{this.props.title}</small>
                <div>{this.props.description}</div>
            </div> 
        );
    }
}

export default TextField;