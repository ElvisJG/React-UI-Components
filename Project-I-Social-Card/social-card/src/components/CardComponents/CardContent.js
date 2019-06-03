import React from 'react';
import './Card.css';

function CardContent() {
  return (
    <div className='card-content'>
      <strong>
        <h2>Get Started with React</h2>
      </strong>
      <h5>
        React makes it painless to create interactive UIs. Design simple views
        for each state in your application.
      </h5>
      <a href='reactjs.org'>reactjs.org</a>
    </div>
  );
}

export default CardContent;
