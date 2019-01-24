import React, { Component } from 'react';
import OpenCard from './screens/openCard/openCard';
import AllRequests from './screens/allRequests/allRequests';
import MyRequests from './screens/myRequests/myRequests';
import CreateOrder from './screens/createOrder/createOrder';
import CreateOrderParamForm from './screens/createOrder/param/createOrderParamForm';
import CreateOrderContactForm from './screens/createOrder/contact/createOrderContactForm';
import Profile from './screens/profile/profile';
// import NavbarSimple from './templatesReact/navbar/navbarSimple';
import Header from './templatesReact/header/header';
import Navbar from './templatesReact/navbar/navbar';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './css/custom.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      screenId: 0
    };
    this.stateChanger=this.stateChanger.bind(this);
  }

  stateChanger(data){
    this.setState(data);
  }

  render() {
    let filler;

    if (this.state.screenId==0) filler=<AllRequests   stateChanger={this.stateChanger} />;
    else if (this.state.screenId==1) filler=<MyRequests />;
    // else if (this.state.screenId==2) filler=<MyResponse />;
    else if (this.state.screenId==3) filler=<Profile  stateChanger={this.stateChanger} />;
    else if (this.state.screenId==4) filler=<CreateOrder stateChanger={this.stateChanger} />;

    return (
      <div> 
        <div className="border border-primary" style={{width: "50%", height: "100%"}}></div>
        <Header />
        <Navbar screenId={this.state.screenId} stateChanger={this.stateChanger} />
        <div>
          {filler}
        </div>
        {/* <AllRequests />
        <MyRequests />
        <OpenCard />
        <Profile />
        <CreateOrderParamForm />
        <CreateOrderContactForm /> */}
      </div>
    );
  }
}

export default App;