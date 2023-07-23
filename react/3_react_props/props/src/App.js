import React from 'react';
import {comments} from './commentData';
import Card from './Card';

export default function App() {
  const test = comments.map((comment, i) =>
  
     <Card commentObject={comment} key={i}/>
  )
  return (
    <div>{test}</div>
  ) 
}