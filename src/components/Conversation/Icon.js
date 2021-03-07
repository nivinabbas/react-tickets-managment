import React from 'react';

const Icon = ({ type, onClick }) => {
  return <i className={`${type} fa fa-${type} fa-lg`} onClick={onClick}></i>;
};

export default Icon;
