import { React, useEffect, useState } from 'react'
import CancelIcon from '@mui/icons-material/Cancel';
import './Ticketmodal.css';
import { CSSTransition } from 'react-transition-group';

const Ticketmodal = (props) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, [])
    const tags = props.info.tags.map((tag) => <div className="ticket-modal-tag">{tag}</div>)

    return (
        <div className="ticket-modal-background">
            <CSSTransition
                in={show}
                timeout={300}
                classNames="alert"
                unmountOnExit
            >
                <div className="ticket-modal-container">
                    <div className="ticket-modal-header">
                        <h2>Ticket Info</h2>
                        <CancelIcon className="ticket-modal-close" onClick={props.close} sx={{ fontSize: 36 }} />
                    </div>
                    <div className="ticket-modal-info ticket-modal-subject">
                        {props.info.subject}
                    </div>
                    <div className="ticket-modal-info">
                        <b>Requester ID:&nbsp;</b>{props.info.requester_id}
                    </div>
                    <div className="ticket-modal-info">
                        <b>Assignee ID:&nbsp;&nbsp;&nbsp;</b>{props.info.assignee_id}
                    </div>
                    <div className="ticket-modal-info ticket-modal-desc">
                        <b>Ticket Description:</b>
                        {props.info.description}
                    </div>
                    <h4 className="ticket-modal-tag-header">Tags:</h4>
                    <div className="ticket-modal-info ticket-modal-tags">
                        {tags ? tags : "No tags to display"}
                    </div>
                </div>
            </CSSTransition>
        </div>
    )
}

export default Ticketmodal
