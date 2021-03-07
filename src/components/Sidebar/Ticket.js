import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTicketAvatar } from '../../helpers/utils';
import { selectTicket, setTicket } from '../../redux/slices/ticketSlice';

const Ticket = ({ ticket }) => {
  const dispatch = useDispatch(setTicket);
  const currentTicket = useSelector(selectTicket);
  return (
    <div
      onClick={() => dispatch(setTicket({ ticketId: ticket._id }))}
      className={
        currentTicket && currentTicket._id === ticket._id
          ? 'circleBase type2 active'
          : 'circleBase type2'
      }
    >
      <span>{getTicketAvatar(ticket.title)}</span>
      <span className={'dot ' + `${ticket.status.toLowerCase()}`}></span>
    </div>
  );
};

export default Ticket;
