import React, { Component } from 'react';
import homeImg from './home.jpg'; 
import './App.css';
import Navigation from './navigationBar';
import Attractions from './Attractions';
import Activities from './Activities';
import Contact from './ContactUs';

class App extends Component {
  render() {
    return (
      <div>
        <header class="App-header">
        <div class="header">
        <h1>Explore Mumbai!</h1>
        </div>
        <Navigation/>
          <img src={homeImg} class="fullImage" alt="c-link" />
          <div class="centered">Mumbai</div>
        </header>
        <p>
            <b>
                Mumbai formerly known as Bombay. It is the capital of  Maharashtra. The city's also famous as it is the heart of bollywood with the presence of
                hindi film and TV industries. There are lot of cool places to visit from seeing colonial architecture, beaches to amazing night life.
                The nights are so radiant that it is called the city that never sleeps.There is lot to explore in this city that has unique bazaars, temples,monuments and India's premier Hotels.
            </b>
        </p>
      <Attractions/>
      <Activities/>
      <Contact/>
      <div class="footer">
        <p>
            CopyRights Reserved © 2019 Vishwarajsinh Gohil and Vaibhav Miglani
        </p>
      </div>
      
      </div>
      
    );
  }
}


export default App;

