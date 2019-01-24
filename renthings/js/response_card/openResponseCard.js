import React from "react";
import "./response_card.scss";


export default class OpenResponseCard extends React.Component {
    render() {
       return (
         <div className="open_response_form card_wrap">
            <div className="price">
               <div className="title">Цена:</div>
               <div className="input_price">
                 <div><input /></div>
                 <img src="/renthings/img/rub_sign.svg" />
               </div>
            </div>
            <div className="description">
                 <div className="title">Описание:</div>
                 <div>
                   <textarea></textarea>
                 </div>
            </div>
            <div className="add_foto">
                 <div className="title">Фото:</div>
                 <div>REACT-DROPZONE</div>
            </div>
         </div>
       );
    }
}