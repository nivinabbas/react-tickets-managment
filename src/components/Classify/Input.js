import React from 'react';

const Input = ({ title, onChange }) => {
  return (
    <>
      <p>Tasks name that will be shown to the user?</p>
      <input onChange={(e) => onChange(e)} value={title} />
      <br />
      <span style={{ color: title.length > 25 ? 'red' : '#ccc' }}>
        character left {25 - title.length}/25
      </span>
    </>
  );
};

export default Input;
