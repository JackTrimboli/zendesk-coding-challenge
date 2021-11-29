import React from 'react';
import './Landing.css';

//Landing page for logging in -- ultimately decided not to implement this for the sake of time

const Landing = () => {
    const handleLogin = () => {
        return;
    }
    return (
        <div className="landing-container">
            <div className="landing-curve">
                <h1 className="landing-header">Ticket Viewer</h1>
                <h3 className="landing-subheader">zendesk coding challenge</h3>
            </div>
            <div className="landing-bottom">
                <a className="landing-btn" href="https://zccjacktrimboli.zendesk.com/oauth/authorizations/new">Login with Zendesk</a>
            </div>
        </div>
    )

}

export default Landing
