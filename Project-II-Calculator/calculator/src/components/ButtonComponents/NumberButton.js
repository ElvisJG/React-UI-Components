import React from 'react';
import './Button.css';

const NumberButton = props => {
  return (
    <div className='numberContainer'>
      <div className='numberbutton'>
        <button className={`numberButton ${props.buttonStyle}`}>
          {props.text}
        </button>
      </div>
    </div>
  );
};

// NumberButton.defaultProps = {
//   buttonStyle: 'numberButton'
// };

export default NumberButton;
