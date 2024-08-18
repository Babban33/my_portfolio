import React from "react";
import '../App.css';
import '../responsive.css';
import profile from './main.jpg';

function Header() {
    return(
        <header className='header mobile-menu-hide'>
            <div className="header-content">
                <div className="header-photo">
                    <img src={profile}/>
                </div>
                <div className="header-titles">
                    <h2>Chaitanya Wankhede</h2>
                    <h4>AI Engineer</h4>
                </div>
            </div>
        </header> 
    )
}
export default Header;