import moment from 'moment';
import shortid from 'shortid';
import { getTimeDifference } from '../../helpers/utils';
export const tickets = [
  {
    _id: shortid.generate(),
    title: 'New Task 1',
    assignee: 'Razan Kiwan',
    status: 'New',
    goal: 'Buy a product',
    startedAt: moment().startOf('day').subtract(1, 'hour').format(),
    elapsedTime: getTimeDifference({
      startedAt: moment().startOf('day').subtract(1, 'hour').format(),
    }),
    messages: [
      {
        _id: shortid.generate(),
        text: 'message 1',
        sender: 'Hamdan Hamameed',
      },
      {
        _id: shortid.generate(),
        text: 'message 1',
        sender: 'Hamdan Hamameed',
      },
    ],
  },
  {
    _id: shortid.generate(),
    title: 'New Task 2',
    assignee: 'Razan Kiwan',
    status: 'Snoozed',
    goal: 'Buy a product',
    startedAt: moment().startOf('day').format(),
    elapsedTime: getTimeDifference({
      startedAt: moment().startOf('day').format(),
    }),
    messages: [
      {
        _id: shortid.generate(),
        text: 'message from nivin abbas',
        sender: 'Nivin Abbas',
      },
    ],
  },
  {
    _id: shortid.generate(),
    title: 'New Task 3',
    assignee: 'Razan Kiwan',
    status: 'New',
    goal: 'Buy a product',
    startedAt: moment().startOf('day').add(2, 'hours').format(),
    elapsedTime: getTimeDifference({
      startedAt: moment().startOf('day').add(2, 'hours').format(),
    }),
    messages: [
      {
        _id: shortid.generate(),
        text: 'message from nivin abbas',
        sender: 'Nivin Abbas',
      },
    ],
  },
  {
    _id: shortid.generate(),
    title: 'New Task 4',
    assignee: 'Razan Kiwan',
    status: 'Unread',
    goal: 'Buy a product',
    startedAt: moment().startOf('day').add(6, 'hours').format(),
    elapsedTime: getTimeDifference({
      startedAt: moment().startOf('day').add(6, 'hours').format(),
    }),
    messages: [
      {
        _id: shortid.generate(),
        text: 'message from nivin abbas',
        sender: 'Nivin Abbas',
      },
    ],
  },
];

export const getElapsedTime = () => {
  return getTimeDifference({
    startedAt: moment().format(),
  });
};
export const initTicket = () => ({
  _id: shortid.generate(),
  startedAt: moment().format(),
  messages: [],
  elapsedTime: getElapsedTime(),
});

export const isSnoozed = (ticket) => ticket.status === 'Snoozed';
export const isArchived = (ticket) => ticket.status === 'Archived';
export const isNew = (ticket) =>
  ticket.status === 'New' || ticket.status === 'Unread';
