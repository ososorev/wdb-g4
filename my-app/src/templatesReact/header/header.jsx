import React, {Component} from 'react';

import twitter from '../../svg/Twitter.svg'
import youTube from '../../svg/YouTube.svg'
import facebook from '../../svg/Facebook.svg'

class Header extends Component{
    render(){
        return(
            <header className="d-flex justify-content-end text-white py-1 px-5" >
                <div className="d-flex align-items-center">
                    <span>Подпишись!</span>
                    <a href="#" className="badge badge-custom">
                        <img src={twitter} alt="Twitter"/>
                    </a>
                    <a href="#" className="badge badge-custom">
                        <img src={youTube} alt="YouTube"/>
                    </a>
                    <a href="#" className="badge badge-custom">
                        <img src={facebook} alt="Facebook"/>
                    </a>
                </div>
            </header>
        );
    }
}

export default Header;