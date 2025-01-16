import React from 'react';
// import './Button.css';

const Button = ({ value, onClick }) => {
  return (
    <button onClick={onClick} style={{display:"inline-block",width:"50px",height:"50px"}}>
      {value}
    </button>
  );
};

export default Button;
