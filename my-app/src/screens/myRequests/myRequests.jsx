import React, { Component } from 'react';
import Response from './response/response';
import TextField from '../../templatesReact/textField';
import TextFieldBold from '../../templatesReact/textFieldBold';
import AddressWrapper from '../../templatesReact/addressWrapper';

import avatarGirl from '../../svg/avatar-girl.svg';
import arrow from '../../svg/arrow.svg';

class MyRequests extends Component {
    constructor(props){
        super(props);
        this.state={
            // isOpened: false,
            collapseLabel: "Показать больше",
            collapseArrowDirection: "",
            collapseHeaderRounded: "rounded-bottom"
        };
        // this.dropDownNameChange=this.dropDownNameChange.bind(this);
        this.collapseNameChange=this.collapseNameChange.bind(this);
    }

    collapseNameChange(){
        if (!document.querySelector('.card button[aria-expanded="false"]')){
            this.setState({
                collapseLabel: "Показать меньше",
                collapseArrowDirection: "rotate",
                collapseHeaderRounded: "rounded-0"
            });
        }
        else{
            this.setState({
                collapseLabel: "Показать больше",
                collapseArrowDirection: "",
                collapseHeaderRounded: "rounded-bottom"
            });
        }
    }

    // dropDownNameChange(e){
    //     // this.setState(prevState={isOpened:false});
    // // }
    //     e.preventDefault();
    //     let arrow=document.getElementById("arrow");
    //     arrow.classList.toggle("rotate");  

    //     this.setState(prevState=>{
    //         return {isOpened:!prevState.isOpened};
    //     });
    // }

    render() {
        // let contentTitle=!this.state.isOpened?"Показать больше":"Показать меньше";
        return (
            <div className="mx-auto" style={{maxWidth: "700px"}}>
                <div className="px-5 py-4 mb- bg-white shadow-sm rounded-top">
                    <h4 className=" mb-3">Нужна дрель с перфоратором</h4>
                    <TextField title="Описание:" description="На два дня, нужно вкрутить плинтуса, подойдет любой вид. Заберу сама."/>
                    <TextFieldBold title="Даты:" description="23 апреля - 25 апреля"/>
                    
                </div>    
                    <div className="card shadow-sm">
                        <div className={"card-header text-center "+ this.state.collapseHeaderRounded}>
                            <h5 className="mb-0">
                                <button class="btn btn-link" type="button" onClick={this.collapseNameChange} data-toggle="collapse" data-target="#collapseRequest" aria-expanded="false" aria-controls="collapseRequest">
                                    <span>{this.state.collapseLabel}</span>
                                    <img className={'ml-2'+' '+ this.state.collapseArrowDirection} src={arrow} alt="arrow"/>
                                    {/* {downArrow} */}
                                </button>
                            </h5>
                        </div>
                        <div id="collapseRequest" className="collapse" >
                            <div className="card-body px-5 rounded-0">
                                <AddressWrapper address="м. Чистые пруды, ул. Земляной Вал, 33" />
                                !!Добавить карту!! 
                            </div>
                                {/* <img className="card-img-bottom border" src="#" alt="Card image cap"/> */}
                        </div>
                    </div>
                {/* </div> */}
                <h4>Эти люди готовы вам помочь</h4>
                <Response   name="Алина Краснова"
                            avatar={avatarGirl} 
                            address="м. Чистые пруды"
                            price="1000"
                            description="На два дня, нужно вкрутить плинтуса, подойдет любой вид. Заберу сама.На два дня, нужно вкрутить плинтуса, подойдет любой вид. Заберу сама.На два дня, нужно вкрутить плинтуса, подойдет любой вид. Заберу сама.На два дня, нужно вкрутить плинтуса, подойдет любой вид. Заберу сама."
                            />
            </div>
        );
    }
}

export default MyRequests;