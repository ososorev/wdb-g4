import React from "react";
import "./request_card.scss";


export default class OpenRequestText extends React.Component {
    render() {
       return (

               <div className="open_request_text">
                   <div className="drop_down_menu">...</div>
                   <div className="request_data">
                         <div className="title">{this.props.title}</div>
                         <div className="description">
                           <div className="label">Описание:</div>
                           <div className="description_text">{this.props.description}</div>
                         </div>
                         <div className="dates">
                           <div className="label">Даты:</div>
                           <div div className="text">{this.props.dates}</div>
                         </div>
                   </div>  
              </div>
      
       );
    }
}