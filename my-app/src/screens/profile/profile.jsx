import React, {Component} from 'react';

import avatar from '../../svg/avatar-man-1.svg';
import editPhoto from '../../svg/edit_photo.svg';
import star from '../../svg/star.svg';
import starHalf from '../../svg/star_half.svg';

class Profile extends Component{
    constructor(props) {
        super(props);
        this.LeaveProfile = this.LeaveProfile.bind(this);
    }

    LeaveProfile(e) {
        e.preventDefault();
        this.props.stateChanger({screenId: 0});
            // , sub_screen:0, user_id: 0});
    }
    render(){
        return(
            <form className="mx-auto py-4 mb-4 bg-white shadow-sm rounded needs-validation" noValidate style={{maxWidth: "700px"}} action="#" method="post">
                <div className="mb-4 mx-auto" style={{maxWidth: '300px'}}>
                    <div className="avatar text-center">
                            <img className="rounded-circle" src={avatar} alt="Avatar" width="140" height="140"/>
                            <a href='#'>
                                <img src={editPhoto} className="under-avatar"  width="50"/>
                            </a>
                            {/* <img src={this.props.items.photo} className="under-avatar"  width="50"/> */}
                    </div>

                    <div className="rating-bar text-center mt-3">
                        <span className="mr-2 align-middle">4,3</span>
                        <img src={star} width="20" height="20"/>
                        <img src={star} width="20" height="20"/>
                        <img src={star}  width="20" height="20"/>
                        <img src={star} width="20" height="20"/>
                        <img src={starHalf} width="20" height="20"/>
                    </div>

                    <div className="text-center text-wrap mt-1">
                            Заказов выполнено: <b>126</b>
                    </div>
                    
                    <p className="text-muted m-0 mt-4">Имя</p>
                    <p className="text-field px-0">Михаил Смирнов</p>
                    {/* {this.props.items.user_name}</p> */}

                    <p className="text-muted m-0 mt-4">Телефон</p>
                    <p className="text-field px-0">+7(987)618-74-12</p>
                    {/* {this.props.items.phone}</p> */}

                    <p className="text-muted m-0 mt-4">Email</p>
                    <p className="text-field px-0">michaelcore@gmail.com</p>
                    {/* {this.props.items.email}</p> */}

                    <p className="text-muted m-0 mt-4">Город</p>
                    <p className="text-field px-0 m-0">Казань</p>
                    {/* {this.props.items.location}</p> */}

                    <div class="d-flex flex-column my-4">
                        <a className="text-dark text-decoration-none" href='#'>Изменить пароль</a>
                        <a className="text-danger text-decoration-none" href='#' onClick={this.LeaveProfile}>Выход из системы</a>
                    </div>
                </div>
            </form>
        );
    }
}

export default Profile;