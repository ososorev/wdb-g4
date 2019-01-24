import React from "react";
import Header from "../header/header";
import "../../css/main_background.css";

export default class Page extends React.Component {
    render() {
       return (
        <div>
          <Header />
          <div className="main_background">
            <div className="workspace_wrap">
      
            </div>
          </div>
        </div>
      );
   }
}
