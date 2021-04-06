import React, { Component } from 'react';
import DonQuijoteDeLaMancha from './images/DonQuijoteDeLaMancha.jpg';
import LaMetamorfosis from './images/LaMetamorfosis.jpg';
import CienAñosDeSoledad from './images/CienAñosDeSoledad.jpg';
import ElNombreDeLaRosa from './images/ElNombreDeLaRosa.jpg';
import LaSombraDelViento from './images/LaSombraDelViento.jpg';
import Aquitania from './images/Aquitania.jpg';

import './App.css';

function doStuff1(list, target) {
  return list.filter(item => {
      return item === target;
  });
}

function doStuff2(list, target) {
  return list.find(item => {
      return item === target;
  });
}

function doStuff3(list) {
  return list.map(item => {
      return item.toLowerCase();
  });
}

const list = ['Patatas', 'Manzanas', 'Peras'];
console.log(doStuff1(list, 'Manzanas'));
console.log(doStuff2(list, 'Manzanas'));
console.log(doStuff3(list));

//Question 1: What's the breakpoint execution order?
//Question 2: What happens if you call: console.log(doStuff1(list, 'manzanas'));?
//Question 3: How would you improve your doStuff1 by ignoring casing? e.g. to find 'MANZANAS'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <br /><br /><br />
        <div className='container'>
          <div className='item'>
            <img src={DonQuijoteDeLaMancha} alt='Don Quijote de la Mancha book' />
            <div className='overlay'>
              <h1>Don Quijote de la Mancha</h1>
            </div>
          </div>
          <div className='item'>
            <img src={LaMetamorfosis} alt='La Metamorfosis book' />
            <div className='overlay'>
              <h1>La Metamorfosis</h1>
            </div>
          </div>
          <div className='item'>
            <img src={CienAñosDeSoledad} alt='Cien años de soledad book' />
            <div class='overlay'>
              <h1>Cien años de soledad</h1>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='item'>
            <img src={ElNombreDeLaRosa} alt='El nombre de la Rosa book' />
            <div className='overlay'>
              <h1>El nombre de la Rosa</h1>
            </div>
          </div>
          <div className='item'>
            <img src={LaSombraDelViento} alt='La sombra del viento book' />
            <div className='overlay'>
              <h1>La sombra del viento</h1>
            </div>
          </div>
          <div className='item'>
            <img src={Aquitania} alt='Aquitania' />
            <div className='overlay'>
              <h1>Aquitania</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;