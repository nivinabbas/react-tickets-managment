import React from 'react';
import './style.css';
import { useSelector } from 'react-redux';
import { selectTicket } from '../../redux/slices/ticketSlice';

import MessageBox from './MessageBox';
import Header from './Header';

export default () => {
  const currentTicket = useSelector(selectTicket);

  return (
    <div className="conversation">
      <Header ticket={currentTicket} />
      <div className="messages">
        {currentTicket.messages &&
          currentTicket.messages.map((m) => (
            <div key={m._id} className="message">
              <p>{m.text}</p>
            </div>
          ))}
      </div>
      <MessageBox ticket={currentTicket} />
    </div>
  );
};
