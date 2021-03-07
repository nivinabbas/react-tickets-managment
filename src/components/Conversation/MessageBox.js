import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendMessage } from '../../redux/slices/ticketSlice';

const MessageBox = ({ ticket }) => {
  const dispatch = useDispatch(sendMessage);
  const [messageText, setMessageText] = useState('');
  const sendTicketMessage = () => {
    dispatch(
      sendMessage({
        ticketId: ticket._id,
        message: messageText,
      }),
    );
    setMessageText('');
  };
  return (
    <div className="message-box">
      <input
        placeholder="Type a message..."
        onKeyDown={(e) =>
          e.keyCode === 13 && sendMessage() && sendTicketMessage()
        }
        onChange={({ target: { value } }) => setMessageText(value)}
        value={messageText}
      />
      <button
        onClick={() => sendTicketMessage()}
        disabled={messageText.length === 0 || !messageText}
      >
        Send
      </button>
    </div>
  );
};

export default MessageBox;
