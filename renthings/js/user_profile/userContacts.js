import React from "react";
import "./user_profile.scss";

export default class UserContacts extends React.Component {
    render() {
       return (
           <div className="contacts">
               <div className='phone'>
                   <div className="phone_img">
                     <img src="/renthings/js/user_profile/img/phone_call.svg" />
                   </div>
                   <div className="phone_number">{this.props.phone}</div>
               </div>
               <div className="address">
                   <div className="geo_marker">
                     <img src="/renthings/img/geo_marker.svg" />
                   </div>
                   <div className="text">{this.props.address}</div>
               </div>
           </div>
       );
    }
}
