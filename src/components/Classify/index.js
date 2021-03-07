import React, { useState } from 'react';
import './style.css';
import { useDispatch } from 'react-redux';
import { addTicket } from '../../redux/slices/ticketSlice';
import Select from './Select';
import Input from './Input';

const newTicketState = { title: '', goal: 'Select', status: 'New' };
export default () => {
  const dispatch = useDispatch();
  const [newTicket, setNewTicket] = useState(newTicketState);

  const validateTicket = () => {
    const { title, goal } = newTicket;
    return !title || title.length >= 25 || !goal || goal === 'Select';
  };

  return (
    <div className="classify">
      <div>
        <h4>Classify</h4>
        <br />
        <Select
          value={newTicket.goal}
          onSelect={({ target: { value } }) =>
            setNewTicket({ ...newTicket, goal: value })
          }
        />
        <br />
        <Input
          onChange={({ target: { value } }) =>
            setNewTicket({ ...newTicket, title: value })
          }
          title={newTicket.title}
        />
        <button
          className="proceed"
          onClick={(e) => {
            e.preventDefault();
            dispatch(addTicket(newTicket));
            setNewTicket(newTicketState);
          }}
          disabled={validateTicket()}
        >
          Proceed
        </button>
      </div>
    </div>
  );
};
