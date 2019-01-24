import React from "react";
import ReactDOM from "react-dom";
import Header from "./header/header";
import ShortRequestCard from "./request_card/shortRequestCard";
import "../css/main_background.css";


document.addEventListener("DOMContentLoaded", function(event) {
    ReactDOM.render(
        <div>
          <Header />
          <div className="main_background">
            <div className="workspace_wrap">
                
              
      
               <ShortRequestCard
                  title='Нужна дрель с перфоратором'
                  dates='23 апреля - 25 апреля'
                  address='м. Чистые пруды'
                  avatar='/renthings/js/user_profile/avatar_img/krasnova.png'
                  username='Алина Краснова'
               />
                
               <ShortRequestCard
                  title='Нужна дрель с перфоратором'
                  dates='23 апреля - 25 апреля'
                  address='м. Чистые пруды'
                  avatar='/renthings/js/user_profile/avatar_img/krasnova.png'
                  username='Алина Краснова'
               />
      
               <ShortRequestCard
                  title='Нужна дрель с перфоратором'
                  dates='23 апреля - 25 апреля'
                  address='м. Чистые пруды'
                  avatar='/renthings/js/user_profile/avatar_img/krasnova.png'
                  username='Алина Краснова'
               />
      
            </div>
          </div>
        </div>,
        document.querySelector("#root")
    );
})