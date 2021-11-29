import './App.css';
import Topnav from './Components/Topnav/Topnav';
import TicketList from './Components/TicketList/TicketList';
import Ticketmodal from './Components/TicketModal/Ticketmodal';
import { useState } from 'react';
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

function App() {

  const [show, setShow] = useState(false);
  const [info, setInfo] = useState(null);

  const showModal = (inf) => {
    setInfo(inf);
    setShow(true);
  }
  const closeModal = () => {
    setInfo(null);
    setShow(false);
  }
  const options = {
    timeout: 5000,
    position: positions.BOTTOM_CENTER
  };

  return (
    <div className="App">
      {/* {loggedIn ? */}
      <Provider template={AlertTemplate} options={options}>
        {show ? <Ticketmodal close={closeModal} info={info} /> : null}
        <Topnav />
        <TicketList emailClick={showModal} />
      </Provider>
      {/* </div> : <Landing login={setLoggedIn} />} */}
    </div>

  );
}

export default App;
