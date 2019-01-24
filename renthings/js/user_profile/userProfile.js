import React from "react";
import UserContacts from "./userContacts";
import "./user_profile.scss";

export default class UserProfile extends React.Component {
    render() {
       return (
           <div className="user">
                <div className="avatar">
                   <img src={this.props.avatar} />
                </div> 
                <div className="username">{this.props.username}</div>
           </div>
       );
    }
}
