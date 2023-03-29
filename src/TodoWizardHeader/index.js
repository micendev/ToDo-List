import React from 'react';
import './TodoWizardHeader.css'

function TodoWizardHeader() {
  return (
    <div className='header'>
      <div className='big-title'>
        <img
          className='logo'
          src='https://img.icons8.com/glyph-neue/64/39A6A3/fantasy.png'
          alt='Logo'
          />
        <h1 className='title'>ToDo</h1>
      </div>
        
    </div>
  );
}

export { TodoWizardHeader };