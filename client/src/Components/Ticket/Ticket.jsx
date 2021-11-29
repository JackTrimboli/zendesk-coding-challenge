import React from 'react';

import './Ticket.css';

const Ticket = (props) => {

    const setColor = () => {
        if (props.index % 2 === 0)
            return '#fbf7f5'
        return '#ffff'
    }
    const bgColor = setColor();

    return (
        <div onClick={() => props.clickEvent(props.info)} className="ticket-container" style={{ backgroundColor: bgColor }}>
            <span className="ticket-span ticket-id">{props.id}</span>
            <span className="ticket-span ticket-title">{props.title}</span>
            {/* <span className="ticket-span ticket-desc">{props.desc}</span> */}
        </div>
    )
}
export default Ticket
