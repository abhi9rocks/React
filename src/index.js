import React from 'react';
import ReactDom from 'react-dom';

//CSS
import './index.css';

const firstBook={
author:'Abhinav Rules',
title :'Atomic Habits: The life-changing million',
img :"https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL600_SR600,400_.jpg"
}

function BookList() {
  return (
    <section className='booklist'>
      <Book img={firstBook.img} title={firstBook.title}/>
      <Book title='random title' number={22}/>
      
    </section>
  ); 
}

const Book = (props) =>{
  
  return (<article className="book">
          <img src={props.img} alt=""/>
          <h1>{title}</h1>
          <h4>{author.toUpperCase()}</h4>
          <p>{props.job}</p>
          <p>{props.title}</p>
          </article>
  );
};

ReactDom.render(<BookList/>, document.getElementById('root'));