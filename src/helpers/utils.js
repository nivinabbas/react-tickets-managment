import moment from 'moment';

export const getTicketAvatar = (title) => {
  if (!title) return 'NT';
  var matches = title.match(/\b(\w)/g);
  var acronym = matches.join('');
  return acronym;
};

const formatTime = (hours, minutes) => {
  return `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
};

export const getTimeDifference = ({ startedAt } = {}) => {
  if (!startedAt) return '00:00';
  const duration = moment.duration(moment().diff(startedAt));
  const {
    _data: { hours, minutes },
  } = duration;

  return formatTime(hours, minutes);
};
