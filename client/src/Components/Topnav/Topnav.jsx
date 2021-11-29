import React from 'react';
import './Topnav.css';
import zenLogo from '../../zendesk-logo.png'

const Topnav = () => {
    return (
        <div className="topnav-container">
            <a href="/" className="topnav-logo"><img className="topnav-img" src={zenLogo} alt="err" /></a>
        </div>
    )
}

export default Topnav;
