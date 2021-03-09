import React from 'react';
import Search from "../images/icons8-search-25.png";
import Shopping from "../images/icons8-shopping-bag-25.png";
import User from "../images/icons8-user-25.png";
import styled from 'styled-components';

//Styled components//

const Header = () => {

    return (
        <div>
            <div>
            <h1>SLO OLIVE</h1>
            <img alt="Search" src={Search} />
            <img alt="Shopping Bag" src={Shopping}/>
            <img alt="User" src={User}/>
            <a href="#">Sign up</a>
            <a href="#">Log in</a>
            </div>
            <div>
                <ul>
                    <li>About</li>
                    <li>Shop</li>
                    <li>Visit Us</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;