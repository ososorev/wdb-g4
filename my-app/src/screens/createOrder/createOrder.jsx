import React, {Component} from 'react';
import CreateOrderParamForm from './param/createOrderParamForm';
import CreateOrderContactForm from './contact/createOrderContactForm';

class CreateOrder extends Component{
    constructor(props){
        super(props)
        this.state={
            orderScreen: 1
        }
        this.orderScreenChanger=this.orderScreenChanger.bind(this);
    }

    orderScreenChanger(data){
        this.setState(data);
    }

    render(){
        let filler=<CreateOrderParamForm />;
        if (this.state.orderScreen==1) filler=<CreateOrderParamForm stateChanger={this.props.stateChanger} orderScreenChanger={this.orderScreenChanger}/>
        else if (this.state.orderScreen==2) filler=<CreateOrderContactForm stateChanger={this.props.stateChanger} orderScreenChanger={this.orderScreenChanger}/>

        return(
            <div>
                {filler}
            </div>
            // <CreateOrderParamForm />
        );
    }
}

export default CreateOrder;