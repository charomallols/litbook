import React from 'react';
import Stack from './Stack';    
import getBooks from './books-get';

export default function Books() {
    return (
      <div>
        <div className='container'>
          {
          getBooks().map(stack => (
            <Stack 
             key={stack.id}
             id={stack.id}
             name={stack.name}
             logo={stack.logo} />
          ))
          }
        </div>
      </div>
    );
  }
  