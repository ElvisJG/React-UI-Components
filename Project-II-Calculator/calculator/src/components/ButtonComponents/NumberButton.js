import React from 'react';
import './Button.css';

const NumberButton = props => {
  return (
    <div className='numberContainer'>
      <div className='numberbutton'>
        <button className={props.buttonStyle}>{props.text}</button>
      </div>
    </div>
  );
};

export default NumberButton;
