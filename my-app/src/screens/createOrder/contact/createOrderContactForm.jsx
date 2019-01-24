import React, { Component } from 'react';

class CreateOrderContactForm extends Component {
    constructor(props){
        super(props);
        this.createOrder=this.createOrder.bind(this);
    }

    createOrder(e){
        e.preventDefault();
        this.props.stateChanger({screenId: 0});
    }


    render() {
        return (
            <form className="mx-auto mb-4 needs-validation my-3" style={{maxWidth: "700px"}} noValidate action="../php/signIn.php" method="post">
                <fieldset className="mb-4 mx-auto bg-white shadow-sm rounded">
                    <legend className="rounded-top px-3">Контакты и сроки:</legend>
                    <div className="px-3 py-2">
                        <div className="form-group">
                            <p>Когда?</p>
                            <div className="">
                                <button className="btn btn-custom-primary mr-3 mb-2 hollow">Сегодня</button>
                                <button className="btn btn-custom-primary mr-3 mb-2">Завтра</button>
                                <button className="btn btn-custom-primary mr-3 mb-2 hollow">Указать дату</button>
                            </div>
                        </div>
                        <div className="form-group">
                            <p>На сколько?</p>
                            <div className="">
                                <button className="btn btn-custom-primary mr-3 mb-2 hollow">На день</button>
                                <button className="btn btn-custom-primary mr-3 mb-2 hollow">На неделю</button>
                                <button className="btn btn-custom-primary mr-3 mb-2">До даты</button>
                                <input type="date" className="btn btn-custom-primary mr-3 mb-2 hollow" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="orderName">Где?</label>
                            <input type="text" className="form-control" name="orderName" id="orderName" placeholder="Пр. укажите станцию метро" required/>
                            <div className="invalid-feedback text-left">Укажите название</div>
                        </div>
                    </div>
                </fieldset>
                <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-custom-primary" onClick={this.createOrder}>Далее</button>
                </div>
            </form>
         );
    }
}

export default CreateOrderContactForm;