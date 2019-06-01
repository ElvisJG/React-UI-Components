import React from 'react';
import './Display.css';
import ActionButton from '../ButtonComponents/ActionButton';
import NumberButton from '../ButtonComponents/NumberButton';

function CalculatorDisplay() {
  return (
    <div className='calculator'>
      <div className='screen'>
        <div className='screenNum'>0</div>
      </div>

      <div className='row'>
        <NumberButton text='clear' buttonStyle='clearButton' />
        <ActionButton text='/' />
      </div>

      <div className='row'>
        <NumberButton text='7' />
        <NumberButton text='8' />
        <NumberButton text='9' />
        <ActionButton text='x' />
      </div>

      <div className='row'>
        <NumberButton text='4' />
        <NumberButton text='5' />
        <NumberButton text='6' />
        <ActionButton text='-' />
      </div>

      <div className='row'>
        <NumberButton text='1' />
        <NumberButton text='2' />
        <NumberButton text='3' />
        <ActionButton text='+' />
      </div>

      <div className='row'>
        <NumberButton text='0' buttonStyle='clearButton' />
        <ActionButton text='=' />
      </div>
    </div>
  );
}

export default CalculatorDisplay;
