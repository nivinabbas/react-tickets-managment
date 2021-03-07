import React, { useEffect } from 'react';
import Icon from './Icon';
import { useDispatch } from 'react-redux';
import { updateTicket } from '../../redux/slices/ticketSlice';
import { getTimeDifference } from '../../helpers/utils';

const Header = ({ ticket }) => {
  const dispatch = useDispatch(updateTicket);

  useEffect(() => {
    const interval = setInterval(
      () =>
        dispatch(
          updateTicket({
            ticketId: ticket._id,
            updateSchema: { elapsedTime: getTimeDifference(ticket) },
          }),
        ),
      60 * 1000,
    );
    return () => {
      clearInterval(interval);
    };
  }, [ticket]);

  const updateTicketStatus = (status) => {
    dispatch(
      updateTicket({
        ticketId: ticket._id,
        updateSchema: { status },
      }),
    );
  };

  return (
    <div>
      <h2 className="title">{ticket ? ticket.title : 'no ticket'}</h2>
      <h4 className="timer">{ticket.elapsedTime}</h4>
      <Icon type="clock" onClick={() => updateTicketStatus('Snoozed')} />
      <Icon type="archive" onClick={() => updateTicketStatus('Archived')} />
    </div>
  );
};

export default Header;
