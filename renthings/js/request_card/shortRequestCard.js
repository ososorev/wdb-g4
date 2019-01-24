import React from "react";
import UserProfile from "../user_profile/userProfile"
import ResponseButton from "../button/button"
import "./request_card.scss";
import "../../css/main_background.css";


export default class ShortRequestCard extends React.Component {
    render() {
       return (

               <div className="short_request card wrap">
                   <div className="request_data">
                       <div className="title">{this.props.title}</div>
                       <div className="dates">{this.props.dates}</div>
                       <div className="address">
                           <div className="geo_marker">
                             <img src="/renthings/img/geo_marker.svg" />
                           </div>
                           <div className="text">{this.props.address}</div>
                       </div>
                   </div>    
                   <UserProfile 
                         avatar={this.props.avatar}
                         username={this.props.username}
                   />
                   <ResponseButton />
              </div>
      
       );
    }
}