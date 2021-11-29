import { React, useState, useEffect } from 'react'
import axios from 'axios';
import Ticket from '../Ticket/Ticket';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Loader from "react-loader-spinner";
import { useAlert } from "react-alert";
import './TicketList.css';


const TicketList = (props) => {

    useEffect(() => {
        setLoading(true)
        axios.get('http://localhost:5000/gettickets', { withCredentials: false }).then(res => {
            console.log(res.data.tickets);
            setTicketList(res.data.tickets);
            setLoading(false);
            buildTicketList(res.data.tickets);
        }).catch(err => {
            console.log(err);
            alert.error("Failed to load tickets");
        });
    }, []);

    const [loading, setLoading] = useState(false);
    const [ticketList, setTicketList] = useState(null);
    const [pages, setPages] = useState([]);
    const [currPage, setCurrPage] = useState(0);
    const [numTicks, setNumTicks] = useState(0);
    const alert = useAlert();

    const buildTicketList = (tickets) => {
        console.log(tickets);
        if (!tickets) {
            return;
        }
        let arr = tickets.map((val, index) => <Ticket key={index} clickEvent={props.emailClick} id={val.requester_id} title={val.subject} desc={val.description} tags={val.tags} info={val} index={index} />)
        setNumTicks(arr.length);
        let page = [];
        let res = [];
        for (let i = 0; i < arr.length; i++) {
            if ((i + 1) % 25 === 0) {
                page.push(arr[i]);
                res.push(page);
                page = [];
            } else {
                page.push(arr[i]);
            }
        }
        res.push(page)
        setPages(res);
    }
    const handlePageChange = (e) => {
        const page = parseInt(e.target.value);
        if (page > pages.length)
            setCurrPage(pages.length - 1);
        else if (page <= 0)
            setCurrPage(1);
        else if (!page)
            return;
        else
            setCurrPage(e.target.value - 1);
    }
    const handleInputFocus = (e) => {
        e.target.select();
    }
    const getDisplayRange = () => {
        let low;
        let high;
        if (currPage < pages.length - 1) {
            low = currPage * 25
            high = parseInt((currPage + 1) * 25);
            if (low === 0)
                low = 1;
        } else {
            low = currPage * 25
            high = numTicks;
        }
        return low + "-" + high;
    }
    const range = getDisplayRange();

    return (
        <div className="ticket-list-container">
            <div className="ticket-list-header">
                <span className="ticket-list-span ticket-list-span-id">Req ID</span>
                <span className="ticket-list-span ticket-list-span-sub">Subject</span>
            </div>
            <hr className="ticket-list-divider" />
            {loading ?
                <div className="loading-container">
                    <Loader
                        Loader
                        type="Oval"
                        color="#498d95"
                        height={100}
                        width={100}
                        timeout={3000} /></div> :
                pages[currPage]}
            <hr className="ticket-list-divider" />
            <div className="ticket-list-pager-container">
                {currPage > 0 ? <ChevronLeftIcon onClick={() => setCurrPage(currPage - 1)} className="ticket-list-pager" sx={{ fontSize: 40 }} /> : <ChevronLeftIcon className="ticket-list-pager-disabled" sx={{ fontSize: 40 }} />}
                <input className="ticket-list-pager-input" type="number" onChange={handlePageChange} value={currPage + 1} onFocus={handleInputFocus} onClick={handleInputFocus} />
                {currPage < pages.length - 2 ? <ChevronRightIcon onClick={() => setCurrPage(currPage + 1)} className="ticket-list-pager" sx={{ fontSize: 40 }} /> : <ChevronRightIcon className="ticket-list-pager-disabled" sx={{ fontSize: 40 }} />}
            </div>
            {numTicks ? <div className="ticket-list-page-label">Displaying: {range} of {numTicks} </div> : <div className="ticket-list-page-label">No Results</div>}
        </div>
    )
}

export default TicketList
