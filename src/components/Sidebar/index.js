import React from 'react';
import './style.css';
import { useSelector } from 'react-redux';
import {
  selectTickets,
  selectSnoozedTickets,
} from '../../redux/slices/ticketSlice';
import avatar from '../../assets/img/avatar.png';
import Ticket from './Ticket';

export default () => {
  const snoozedTickets = useSelector(selectSnoozedTickets);
  const tickets = useSelector(selectTickets);

  return (
    <div className="sidebar">
      <img src={avatar} alt="Avatar" className="avatar"></img>
      <br />
      {tickets.map((ticket) => (
        <Ticket ticket={ticket} key={ticket._id} />
      ))}
      <hr />
      {snoozedTickets.map((ticket) => (
        <Ticket ticket={ticket} key={ticket._id} />
      ))}
    </div>
  );
};
