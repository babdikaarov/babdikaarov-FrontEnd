import { animals } from './animals';
import React from 'react';
import './App.css';
// import {createRoot} from 'react-dom/client';


const title = "";
const background = (<img 
  className='background'
  alt='ocean'
  src='./images/ocean.jpg' />);
const images = [];
for (const animal in animals) {
 images.push((<img 
  key={animal}
  className='animal'
  alt={animal}
  src={animals[animal].image}
  aria-label={animal}
  role='button'
  onClick={displayFact} />))
};

const showBackground = true;

function displayFact (event) {
  const name = event.target.alt;
  let randomIndex = Math.floor(Math.random() * animals[name].facts.length);
  document.getElementById('fact').innerHTML = animals[name].facts[randomIndex];
}
  
export default function App(){ 
  
  return (
  <div>
    <h1>Click an animal for a fun fact</h1>
    {showBackground && background}
    <div className="animals">{images}</div>
    <p id="fact"></p>
  </div>
)
};

