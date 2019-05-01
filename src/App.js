import React, { Component } from 'react';
import homeImg from './home.jpg'; 
import './App.css';



class App extends Component {
  render() {
    return (
      <div class="App">
        <header class="App-header">
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
      
      </div>
      
    );
  }
}


export default App;

