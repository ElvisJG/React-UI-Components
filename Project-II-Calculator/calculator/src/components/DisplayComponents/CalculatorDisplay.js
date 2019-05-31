import React from 'react';
import './Display.css';
import ActionButton from '../ButtonComponents/ActionButton';
import NumberButton from '../ButtonComponents/NumberButton';

function CalculatorDisplay() {
  return (
    <div className='screen'>
      <h1 className='screenNum'>0</h1>
    </div>
//     <div className='computationSection'>
//         <NumberButton text="Clear" buttonStyle="clearButton"/>
//     </div>
//   );
}

export default CalculatorDisplay;
