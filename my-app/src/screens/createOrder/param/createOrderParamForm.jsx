import React, { Component } from 'react';
import report from '../../../svg/report.svg';

class CreateOrderParamForm extends Component {
    constructor(props){
        super(props)
        this.createOrderContacts=this.createOrderContacts.bind(this);
    }

    createOrderContacts(e){
        e.preventDefault();
        this.props.orderScreenChanger({orderScreen: 2});
    }

    render() {
        return (
            <form className="mx-auto mb-4 my-3 needs-validation" noValidate style={{maxWidth: "700px"}} action="../php/signIn.php" method="post">
                <fieldset className="mb-4 mx-auto bg-white shadow-sm rounded">
                    <legend className="border rounded-top px-3">Параметры:</legend>
                    <div className="px-3 py-2">
                        <div className="form-group">
                            <label htmlFor="orderName">Что?</label>
                            <input type="text" className="form-control" name="orderName" id="orderName" placeholder="Пр. платье в пол красного цвета" required/>
                            <div className="invalid-feedback text-left">Укажите название</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Описание:</label>
                            <textarea className="form-control" name="description" id="description" placeholder="Платье хотелось бы без блесток, страз и т.д." required></textarea>
                            <div className="invalid-feedback text-left">Опишите товар</div>
                        </div>
                        <div className="d-flex align-items-start">
                            <img className="mr-2" src={report} alt="" />
                            <p>Не пишите в названии и описание контактную информацию и сроки — для этого есть отдельные поля на вкладке “Контакты и сроки” :)</p>
                        </div>
                    </div>
                </fieldset>
                <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-custom-primary" onClick={this.createOrderContacts} >Далее</button>
                </div>
            </form> 
        );
    }
}

export default CreateOrderParamForm;