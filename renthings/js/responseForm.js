import React from "react";
import ReactDOM from "react-dom";
import Header from "./header/header";
import OpenRequestCard from "./request_card/openRequestCard";
import OpenResponseCard from "./response_card/openResponseCard";
import Button from "./button/button.js";
import "../css/main_background.css";


document.addEventListener("DOMContentLoaded", function(event) {
    ReactDOM.render(
      <div>
         <Header />
          <div className="main_background">
            <div className="workspace_wrap">
              <OpenRequestCard
                title='Нужна дрель с перфоратором'
                description='На два дня, нужно вкрутить плинтуса, подойдет любой вид. Заберу сама.'
                dates='23 апреля - 25 апреля'
                price='1000'
              />

              <OpenResponseCard
              />

              <Button
              />
          </div>
        </div>
      </div>,
        document.querySelector("#root")
    );
})