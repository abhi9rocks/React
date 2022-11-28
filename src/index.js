import React from 'react';
import ReactDom from 'react-dom';

//CSS
import './index.css';

function BookList() {
  return (
    <section>
      <Book/>
    </section>
  );
  
}
const Book = () =>{
  return (<article><Image></Image>
          <Title/>
          </article>
  );
};
const Image = () => (<img src="https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL600_SR600,400_.jpg" alt=""/>
);

const Title = () => <h1>Atomic Habits: The life-changing million</h1>
ReactDom.render(<BookList/>, document.getElementById('root'));