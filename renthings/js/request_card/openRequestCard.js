import React from "react";
import UserProfile from "../user_profile/userProfile";
import UserContacts from "../user_profile/userContacts";
import OpenRequestText from "./openRequestText";
import "./request_card.scss";


export default class OpenRequestCard extends React.Component {
    render() {
       return (
        
            <div className="open_request_card card_wrap">
               <div className="request_wrap">
                  
                   <OpenRequestText
                     title={this.props.title}
                     description={this.props.description}
                     dates={this.props.dates}
                   />      
         
                   <div className="request_owner">
                       <UserProfile 
                         avatar="/renthings/js/user_profile/avatar_img/krasnova.png"
                         username='Алина Краснова'
                       />
                     
                     <UserContacts
                       phone='+7(987)543-72-21'
                       address='м.Чистые пруды, ул. Земляной Вал, 33'
                     />
         
                 </div>
               </div>
               <div className="map">
                 Map
               </div>
            </div>
      
       );
    }
}

