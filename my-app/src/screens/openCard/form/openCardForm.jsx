import React, { Component } from 'react';

class OpenCardForm extends React.Component {
    render() {
        return (
            <form className="mx-auto mb-4 needs-validation" noValidate style={{maxWidth: "700px"}} action="../php/signIn.php" method="post">
                <fieldset className="mb-4 px-3 py-4 mx-auto bg-white shadow-sm rounded">
                    <div className="form-group">
                        <label htmlFor="price">Цена</label>
                        <input type="text" className="form-control" name="price" id="price" placeholder="1000" required/>
                        <div className="invalid-feedback text-left">Укажите цену</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Описание:</label>
                        <textarea className="form-control" name="description" id="description" placeholder="Платье шуруповерт супер" required></textarea>
                        <div className="invalid-feedback text-left">Опишите товар</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="photo">Фото:</label>
                        <input type="file" className="" name="photo" id="photo" placeholder="Добавьте фотографии" required/>
                    </div>
                </fieldset>
                <div className="d-flex justify-content-end">
                    <a href="#" className="text-center text-custom-primary" style={{padding: "0.375rem 0.75rem", fontSize: "1rem"}}>Отменить</a> 
                    <button type="submit" className="btn btn-custom-primary">Откликнуться</button>
                </div>
            </form> 
         );
    }
}

export default OpenCardForm;