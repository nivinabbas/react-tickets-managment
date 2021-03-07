import { createSlice } from '@reduxjs/toolkit';
import shortid from 'shortid';
import { tickets, initTicket, isSnoozed, isNew, isArchived } from './helpers';

export const ticketSlice = createSlice({
  name: 'ticket',
  initialState: {
    itemCount: 0,
    items: {},
    tickets,
    currentTicket: tickets[0],
  },
  reducers: {
    addTicket: (state, action) => {
      const ticket = action.payload;
      state.tickets.push({
        ...ticket,
        ...initTicket(),
      });
    },
    setTicket: (state, action) => {
      const { ticketId } = action.payload;
      return {
        ...state,
        currentTicket: state.tickets.find((t) => t._id === ticketId),
      };
    },
    updateTicket: (state, action) => {
      let newCurrent = state.currentTicket;
      const {
        payload: { ticketId, updateSchema },
      } = action;
      if (
        updateSchema.status &&
        (isSnoozed(updateSchema) || isArchived(updateSchema))
      ) {
        newCurrent =
          state.tickets.find(
            (t) => t._id !== ticketId && !isSnoozed(t) && !isArchived(t),
          ) || {};
      }

      const updatedTickets = state.tickets.map((t) => {
        if (t._id === ticketId) return { ...t, ...updateSchema };
        return t;
      });

      return {
        ...state,
        tickets: updatedTickets,
        currentTicket: updateSchema.elapsedTime
          ? {
              ...newCurrent,
              elapsedTime: updateSchema.elapsedTime,
            }
          : newCurrent,
      };
    },
    sendMessage: (state, action) => {
      const {
        payload: { ticketId, message },
      } = action;

      return {
        ...state,
        tickets: state.tickets.map((t) => {
          if (t._id === ticketId)
            return {
              ...t,
              messages: [
                ...t.messages,
                { text: message, _id: shortid.generate() },
              ],
            };
          return t;
        }),
        currentTicket: {
          ...state.currentTicket,
          messages: [
            ...state.currentTicket.messages,
            { text: message, _id: shortid.generate() },
          ],
        },
      };
    },
  },
});

export const {
  addTicket,
  setTicket,
  updateTicket,
  sendMessage,
} = ticketSlice.actions;

export const selectTickets = (state) => state.ticket.tickets.filter(isNew);
export const selectTicket = (state) => state.ticket.currentTicket;
export const selectSnoozedTickets = (state) =>
  state.ticket.tickets.filter(isSnoozed);

export default ticketSlice.reducer;
