import React, { Component } from 'react';

import OpenCardForm from './form/openCardForm';
import OpenCardRequest from './request/openCardRequest';

class OpenCard extends Component {
    render() {
      return (
        <div> 
          <OpenCardRequest />
          <OpenCardForm />
        </div>
      );
    }
  }

export default OpenCard;