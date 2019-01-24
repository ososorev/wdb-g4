import React, { Component } from 'react';
import TextField from '../../../templatesReact/textField';
import TextFieldBold from '../../../templatesReact/textFieldBold';
import ProfileInfo from '../../../templatesReact/profileInfo';
import PhoneWrapper from '../../../templatesReact/phoneWrapper';
import AddressWrapper from '../../../templatesReact/addressWrapper';

import avatarGirl from '../../../svg/avatar-girl.svg';

class OpenCardRequest extends Component {
    render() {
        return (
            <div className="mx-auto px-5 py-4 mb-4 bg-white shadow-sm rounded" style={{maxWidth: "700px"}}>
                <h4 className=" mb-3">Нужна дрель с перфоратором</h4>
                <TextField title="Описание:" description="На два дня, нужно вкрутить плинтуса, подойдет любой вид. Заберу сама."/>
                <TextFieldBold title="Даты:" description="23 апреля - 25 апреля"/>
                <TextFieldBold title="Рекомендованая цена:" description="1 000 р."/>
                <div className="mb-3 d-flex flex-wrap justify-content-between">
                    <ProfileInfo name="Алина Краснова" avatar={avatarGirl} />
                    <div className="d-flex flex-column">
                        <PhoneWrapper phoneNumber="89875437221" phoneNumberView="+7(987)-543-72-21" />
                        <AddressWrapper address="м. Чистые пруды, ул. Земляной Вал, 33" />
                    </div>
                </div>
                !!Добавить карту!! 
            </div>
        );
    }
}

export default OpenCardRequest;