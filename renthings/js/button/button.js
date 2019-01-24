import React from "react";
// import "../css/card.css";

export default class ResponseButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {notResponded: true};
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      this.setState(prevState => ({
        notResponded: !prevState.notResponded
      }));
    }
  
    render() {
       return (
         <div className="button">
            <button className="btn" onClick={this.handleClick}>
               {this.state.notResponded ? 'Откликнуться' : 'Отменить'}
            </button>
         </div>
       );
    }

}


  