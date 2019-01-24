import React, { Component } from 'react';

class TextFieldBold extends Component {
    render() {
        return (
            <div className="mb-3">
                <small className="text-muted">{this.props.title}</small>
                <div><strong>{this.props.description}</strong></div>
            </div> 
        );
    }
}

export default TextFieldBold;