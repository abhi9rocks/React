import React from 'react';
import ReactDom from 'react-dom';

function Greeting(){
  return (
  <div className=''>
   <h4>Hello People</h4>
   <ul>
    <li>
      <a href='#'>Hello World</a>
    </li>

   </ul>
  </div>
  );
}
ReactDom.render(<Greeting/>, document.getElementById('root'));