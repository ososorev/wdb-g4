import React from "react";
import UserProfile from "../user_profile/userProfile";
import "./header.scss";

export default class Header extends React.Component {
    render() {
       return (
         <header className="header">
          
           <div className="subscribe_background">
              <div className="subscribe_bar"> 
                 <div className="subscribes">
                    <div className="subscr_title"> Подпишись!</div>
                    <div className="subscr_img"><img src="/renthings/img/twitter.svg" /> </div>
                    <div className="subscr_img"><img src="/renthings/img/youtube.svg" /> </div>
                    <div className="subscr_img"><img src="/renthings/img/facebook.svg" /> </div>
                 </div>
              </div>
           </div>
          
           <div className="navigation_background">
              <div className="navigation_bar"> 
                <div className="logo"><img src="/renthings/img/logo.svg" /></div>
                <div className="tabs"> 
                    <div className="all_requests">Все запросы</div>
                    <div className="my_requests">Мои запросы</div>
                    <div className="my_response">Мои отклики</div>
                </div>
                <div className="profile">
                    <div className="my_location_icon">
                       <img src="/renthings/img/geo_marker.svg" />
                       Йошкар-Ола
                    </div>
                    <div className="user_profile">
                       <UserProfile
                         avatar="/renthings/js/user_profile/avatar_img/smirnov.png"
                         username='Михаил Смирнов'
                       />
                    </div>
                </div>
              </div>
            </div>
         
        </header>
        );
    }
}

